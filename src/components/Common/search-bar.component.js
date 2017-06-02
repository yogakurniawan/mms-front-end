import React from 'react';
import ReactDOM from 'react-dom';

//import col/row bootstrap
import {Row, Col} from 'react-flexbox-grid'

//import material ui component
import TextField from 'material-ui/TextField'


class SearchBarComponent extends React.Component {

	constructor(props) {
		super(props);
	}

    changeSearchBarTextField(event, value, name) {
        this.props.onChange({
            field : name,
            value : value
        });
    }

	render() {

		return (
                <Row>
                    { this.props.fields && this.props.fields.length>0 ? 
                        this.props.fields.map((field,i) =>
                                <Col lg={3} key={i}>
                                    <TextField hintText={field.lookupText}
                                                floatingLabelText={field.lookupText}
                                                onChange={(event, value)=>  this.changeSearchBarTextField(event, value, field.lookupValue)}
                                                style={{width:'100%'}}/>
                                </Col>
                        )
                            : (
                            <div className="no-record">
                                <span>No Record Found</span>
                            </div>
                        )
                    }
                </Row>
		)
	}
}

export default SearchBarComponent;