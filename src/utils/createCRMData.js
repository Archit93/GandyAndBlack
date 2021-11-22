export const createCRMData = (crmDetails) => {
    const stageSixArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-6'));
    console.log(stageSixArray);
   
    const stageSixCard = [];
    stageSixArray.map((cardElement) => {
        stageSixCard.push({
            "id": cardElement.id,
            "title": `Order ID : ${cardElement.id}`,
            "description": cardElement.customerName
        })
    })

    let kanbanData = {
        lanes : [
            {
                "id": "ORDER_PLACED",
                "title": "Order Placed",
                "label": `${stageSixArray.length}/${crmDetails.length}`,
                "style": {
                  "width": "16%"
                },
                "cards": stageSixCard
              },
              {
                "id": "PICK_PACK",
                "title": "Pick And Pack",
                "label": "10/20",
                "style": {
                  "width": "16%"
                },
                "cards": [
                ]
              },
        
              {
                "id": "OUTFOR_DELIVERY",
                "title": "Out For Delivery",
                "label": "0/0",
                "style": {
                  "width": "16%"
                },
                "cards": [
                  {
                    "id": "Delivery_id",
                    "title": "Order ID",
                    "label": "Order Date",
                    "description": "Customer Name"
                  }
                ]
              },
        
              {
                "id": "PARCEL_RECEIVED",
                "title": "Parcel Received",
                "style": {
                  "width": "16%"
                },
                "label": "2/5",
                "cards": [
                  {
                    "id": "Parcel_id",
                    "title": "Order ID",
                    "label": "Order Date",
                    "description": "Customer Name"
                  },
                  {
                    "id": "Parcel_id1",
                    "title": "Order ID",
                    "label": "Order Date",
                    "description": "Customer Name"
                  }
                ]
              },
        
              {
                "id": "PAYMENT_RECEIVED",
                "title": "Payment Received",
                "style": {
                  "width": "16%"
                },
                "label": "1/1",
                "cards": [
                  {
                    "id": "PaymentReceived_id",
                    "title": "Order ID",
                    "label": "Order Date",
                    "description": "Customer Name"
                  }
                ]
              },
        
              {
                "id": "ORDER_COMPLETED",
                "title": "Order Completed",
                "style": {
                  "width": "16%"
                },
                "label": "1/1",
                "cards": [
                  {
                    "id": "OrderCompleted_id",
                    "title": "Order ID",
                    "label": "Order Date",
                    "description": "Customer Name"
                  }
                ]
              }
        ]
    };

    return kanbanData;
}