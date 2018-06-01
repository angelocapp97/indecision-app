import React from 'react'
import { Header } from './Header'
import { Options } from './Options'
import { RemoveAllModal } from './RemoveAllModal'

export class IndecisionApp extends React.Component {
    state = { 
        options: [],
        removeAllModalState: undefined
    }

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
        const subtitle = 'Put your live in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Options
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                    handleRemoveAll={this.toggleRemoveAllModal}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <RemoveAllModal
                    isOpen={this.state.removeAllModalState}
                    toggle={this.toggleRemoveAllModal}
                    length={this.state.options.length}
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
    toggleRemoveAllModal = (e) => {
        this.setState((prev) => ({ removeAllModalState: !prev.removeAllModalState }))
        if (e && e.target.dataset.result === 'ok') {
            this.setState(() => ({ options: [] }))
        }
    }
}