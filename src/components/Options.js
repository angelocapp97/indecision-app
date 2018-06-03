import React from 'react'
import { Option } from './Option'
import { AddOption } from './AddOption'
import { RemoveAll } from './RemoveAll'

export class Options extends React.Component {
    render() {
        return (
            <div className="widget">
                <div className="widget-header">
                    <h3 className="widget-header__title">Your options</h3>
                    <RemoveAll
                        handleRemoveAll={this.props.handleRemoveAll}
                        optionsLength={this.props.options.length}
                    />
                </div>
                {
                    (this.props.options && this.props.options.length > 0) ? (
                        <div className="widget-body">
                            {this.props.options.map((item, index) => (
                                <Option className="widget-body__option"
                                    option={item}
                                    handleDeleteOption={this.props.handleDeleteOption}
                                    key={index}
                                    _key={index + 1}
                                    value={item}
                                />
                            ))}
                        </div>
                        ) : <p className="widget-body__message">Please add an option to get started!</p>
                }
                <div className="widget-footer">
                    <AddOption handleAddOption={this.props.handleAddOption} />
                </div>
            </div>
        )
    }
}