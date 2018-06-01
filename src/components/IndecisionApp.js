import React from 'react'
import { Header } from './Header'
import { Options } from './Options'

export class IndecisionApp extends React.Component {
    state = { options: [] }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <Options
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
            </div>
        )
    }
    handleAddOption = (option) => {
        if (!option || !option.trim()) {
            return `Unable to add '${option}' option.`
        } else if (this.state.options.indexOf(option) > -1) {
            return `The option '${option}' already exists.`
        }

        this.setState((prev) => ({ options: [...prev.options, option] }))
    }
    handleDeleteOption = (optionToRemove) => {
        if (!optionToRemove || !optionToRemove.trim()) {
            return `Unable to remove '${optionToRemove}' option.`
        }
        else if (this.state.options.indexOf(optionToRemove) === -1) {
            return `The option '${optionToRemove}' doesn't exists.`
        }

        this.setState((prev) => ({
            options: prev.options.filter((option) => option !== optionToRemove)
        }))
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    }
}