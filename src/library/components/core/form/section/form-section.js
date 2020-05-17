import React from 'react';
import classNames from 'classnames';
import { FormSectionLayoutType } from './form-section.model';
import './form-section.scss';
import './theme/theme-white.scss';

const formSection = ({
    layout,
    theme,
    numberOfRowFields,
    autoSpacing,
    align,
    width,
    cssClasses,
    style,
    children,
}) => {
    layout = layout || FormSectionLayoutType.Vertical;
    theme = theme;
    style = style || {};
    style = width ? { ...style, width: width } : style;

    return (
        <div
            className={classNames(
                'form-section',
                layout ? `layout-${layout}` : '',
                numberOfRowFields ? `field-${numberOfRowFields}` : '',
                autoSpacing ? `auto-spacing` : '',
                theme ? `theme theme-${theme}` : '',
                align || '',
                cssClasses,
            )}
            style={style}
        >
            {children && children.map
                ? children.map((child, index) => {
                      return wrapSectionChildOrReturn(
                          child.props.name || index,
                          child,
                          autoSpacing,
                      );
                  })
                : wrapSectionChildOrReturn(
                      children.props.name,
                      children,
                      autoSpacing,
                  )}
        </div>
    );
};

const wrapSectionChildOrReturn = (key, child, autoSpacing) => {
    return !autoSpacing ? (
        <React.Fragment key={key}>{child}</React.Fragment>
    ) : (
        <div key={key} className="section-item">
            {child}
        </div>
    );
};

export { formSection as FormSection };
