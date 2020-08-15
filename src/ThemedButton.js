import React from "react";
import Prototypes, { checkPropTypes } from "prop-types";

function ThemedButton({ theme, label, ...restProps }) {
    return (
        <button className={`btn btn-${theme}`}{...restProps}>
            {label}
        </button>
    );
}

ThemedButton.defaulProps = {
    theme: "default",
};

ThemedButton.prototype = {
    theme: Prototypes.string,
    label: Prototypes.string.isRequired,
}

export default ThemedButton;