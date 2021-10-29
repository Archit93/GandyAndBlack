import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

export const PromoCodeColumn = (params) => {
    const { api, data, column, node, context } = params;

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Promocode</Popover.Title>
            <Popover.Content>
                <strong>Please enter promotional code to be applied:</strong>
                <input type="text" name="fname" placeholder="Enter code" />
                <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
          </Popover.Content>
        </Popover>
    );

    return (
        <span className="my-renderer">
                <>
                    {/* <button className="next action-button" onClick={() => context.frameWorkComponentChange({api})}>Apply PromoCode</button> */}
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
                        <Button variant="success">Click to trigger popover</Button>
                    </OverlayTrigger>
                </>
        </span>
    );
}