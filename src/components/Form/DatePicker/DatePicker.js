/**
 * Created by ravi.hamsa on 6/29/16.
 */

import React, {PropTypes, Component} from "react";
import FormElement from '../FormElement';
import common from '../../common';
import Month from './Month';
const {InlinePopup, InlineButton, InlineBody} = common.InlinePopupGroup;


class DatePicker extends FormElement {

    onDateSelect(value){
        let name = this.props.name;
        this.context.valueStore.set({[name]: value});
        this.setState({defaultValue:value})
        this.refs.inputField.value = value;
    }

    render() {

        let defaultValue = this.getDefaultValue();
        let formClasses = this.getFormClasses();

        return <fieldset className={formClasses}>
            <label>{this.props.label}</label>
            <InlinePopup itemClick={function(){console.log(arguments)}}>
                   <InlineButton>
                       <input type={this.props.type} className="form-control" name={this.props.name}
                              placeholder={this.props.placeholder} onChange={this.onChange.bind(this)} defaultValue={defaultValue}
                              readOnly="true" ref="inputField"/>
                   </InlineButton>
                    <InlineBody>
                        <Month onDateSelect={this.onDateSelect.bind(this)} selectedDate={defaultValue}></Month>
                    </InlineBody>
            </InlinePopup>
            {this.props.helperText ? <small className="text-muted">{this.props.helperText}</small> : '' }
            {this.props.errors ? <small className="text-muted">{this.props.errors}</small> : '' }
        </fieldset>
    }
}


export default DatePicker;