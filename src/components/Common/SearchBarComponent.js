import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from 'components/Form';

class SearchBarComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.props.onSearchBarChange();
        }
    }

    render() {
        const { fields } = this.props;
        return (
            <Row>
                {fields && fields.length > 0 ?
                    fields.map((field, i) =>
                        <Col lg={3} key={i}>
                            <Field
                                fullWidth={true}
                                onKeyPress={this.handleKeyPress}
                                name={field.lookupValue}
                                component={renderTextField}
                                label={field.lookupText} />
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

export default reduxForm({
    form: 'SearchBar'
})(SearchBarComponent);