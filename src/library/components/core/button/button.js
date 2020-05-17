import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ButtonAction } from './button.model';
import { Button, Tooltip } from 'antd';
import './button.scss';

export const button = ({
    type,
    disabled,
    startIcon,
    endIcon,
    children,
    onClick,
    action,
    loading,
    size,
    danger,
    tooltip,
}) => {
    action = action || ButtonAction.Button;
    return (
        <React.Fragment>
            <Tooltip placement="top" title={tooltip}>
                <Button
                    htmlType={action}
                    type={type}
                    className={classNames('btn', type)}
                    size={size}
                    loading={loading}
                    danger={danger}
                    onClick={onClick}
                >
                    {startIcon ? (
                        <span className="btn-icon start">{startIcon}</span>
                    ) : null}
                    {children}
                    {endIcon ? (
                        <span className="btn-icon end">{endIcon}</span>
                    ) : null}
                </Button>
            </Tooltip>
        </React.Fragment>
    );
};

button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
};
