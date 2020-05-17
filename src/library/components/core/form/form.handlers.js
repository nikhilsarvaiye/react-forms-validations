import { FormQueryParamsHandler } from './handlers/query-params';

export class FormHandlers {
    handlers = [];

    props = null;

    constructor(props) {
        this.props = props;
        if (props.queryParams) {
            this.handlers.push(new FormQueryParamsHandler(props.queryParams));
        }
    }

    onInitializing = initialValues => {
        this.handlers.forEach(handler => {
            initialValues = handler.onInitializing(initialValues);
        });
        return initialValues;
    };

    onReady = (initialValues, form) => {
        this.handlers.forEach(handler => {
            handler.onReady(initialValues, form);
        });
    };

    onSubmitting = (values, form) => {
        this.handlers.forEach(handler => {
            handler.onSubmitting(values, form);
        });
    };
}
