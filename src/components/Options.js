import React from 'react'
import { Option } from './Option'
import { AddOption } from './AddOption'
import { RemoveAll } from './RemoveAll'

export class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    (this.props.options && this.props.options.length > 0) ? (
                        <div>
                            <p>There are some options:</p>
                            <div className="list-container">
                                {this.props.options.map((item) => (
                                    <Option option={item}
                                        handleDeleteOption={this.props.handleDeleteOption}
                                        key={this.props.options.indexOf(item)}
                                        _key={this.props.options.indexOf(item)}
                                        value={item}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : <p className="no-options">There are no options to show.</p>
                }
                <div>
                    <AddOption handleAddOption={this.props.handleAddOption} />
                    <RemoveAll
                        handleRemoveAll={this.props.handleRemoveAll}
                        optionsLength={this.props.options.length}
                    />
                </div>
            </div>
        )
    }
}