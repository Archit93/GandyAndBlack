import React from "react";
import ToggleButton from "react-toggle-button";

export const CustomerNotificationColumn = (param, changeNotification) => {
    return (
        <div className="toggle mrt-10 pdb-30" >
            <span>
                <ToggleButton
                    value={param.data.notification}
                    onToggle={(value)=> {
                        changeNotification(!value, param.data)
                    }}
                    thumbStyle={{ borderRadius: 2 }}
                    trackStyle={{ borderRadius: 2 }}
                />
            </span>
        </div >
    )
};

const changeValue = (value) =>
{
    return !value;
}
