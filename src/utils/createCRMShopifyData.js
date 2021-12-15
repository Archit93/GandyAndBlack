export const createCRMShopifyData = (shopifycrm) => {
    const stageOneArray = shopifycrm.filter((crmDetail) => (crmDetail.currentstage === 'status-1'));
    const stageTwoArray = shopifycrm.filter((crmDetail) => (crmDetail.currentstage === 'status-2'));
    const stageThreeArray = shopifycrm.filter((crmDetail) => (crmDetail.currentstage === 'status-3'));
    const stageFourArray = shopifycrm.filter((crmDetail) => (crmDetail.currentstage === 'status-4'));
    const stageFiveArray = shopifycrm.filter((crmDetail) => (crmDetail.currentstage === 'status-5'));
    const stageSixArray = shopifycrm.filter((crmDetail) => (crmDetail.currentstage === 'status-6'));
  
    const stageOneCard = [];
    const stageTwoCard = [];
    const stageThreeCard = [];
    const stageFourCard = [];
    const stageFiveCard = [];
    const stageSixCard = [];
  
    stageOneArray.map((cardElement) => {
      stageOneCard.push({
        "id": cardElement.id,
        "title": `Order ID : ${cardElement.id}`,
        "description": `Customer Name : ${cardElement.customerName}`
      })
    })
  
    stageTwoArray.map((cardElement) => {
      stageTwoCard.push({
        "id": cardElement.id,
        "title": `Order ID : ${cardElement.id}`,
        "description": `Customer Name : ${cardElement.customerName}`
      })
    })
  
    stageThreeArray.map((cardElement) => {
      stageThreeCard.push({
        "id": cardElement.id,
        "title": `Order ID : ${cardElement.id}`,
        "description": `Customer Name : ${cardElement.customerName}`
      })
    })
  
    stageFourArray.map((cardElement) => {
      stageFourCard.push({
        "id": cardElement.id,
        "title": `Order ID : ${cardElement.id}`,
        "description": `Customer Name : ${cardElement.customerName}`
      })
    })
  
    stageFiveArray.map((cardElement) => {
      stageFiveCard.push({
        "id": cardElement.id,
        "title": `Order ID : ${cardElement.id}`,
        "description": `Customer Name : ${cardElement.customerName}`
      })
    })
  
    stageSixArray.map((cardElement) => {
      stageSixCard.push({
        "id": cardElement.id,
        "title": `Order ID : ${cardElement.id}`,
        "description": `Customer Name : ${cardElement.customerName}`
      })
    })
  
    let kanbanData = {
      lanes: [
        {
          "id": "ORDER_PLACED",
          "title": "Order Placed",
          "label": `${stageOneArray.length}/${shopifycrm.length}`,
          "style": {
            "width": "21%",
            "background-color": "#212839"
          },
          "cards": stageOneCard
        },
        {
          "id": "PICK_PACK",
          "title": "Pick And Pack",
          "label": `${stageTwoArray.length}/${shopifycrm.length}`,
          "style": {
            "width": "21%",
            "background-color": "#212839"
          },
          "cards": stageTwoCard
        },
  
        {
          "id": "OUTFOR_DELIVERY",
          "title": "Out For Delivery",
          "label": `${stageThreeArray.length}/${shopifycrm.length}`,
          "style": {
            "width": "21%",
            "background-color": "#212839"
          },
          "cards": stageThreeCard
        },
  
        {
          "id": "PARCEL_RECEIVED",
          "title": "Parcel Received",
          "style": {
            "width": "21%",
            "background-color": "#212839"
          },
          "label": `${stageFourArray.length}/${shopifycrm.length}`,
          "cards": stageFourCard
        },
  
        {
          "id": "PAYMENT_RECEIVED",
          "title": "Payment Received",
          "style": {
            "width": "21%",
            "background-color": "#212839"
          },
          "label": `${stageFiveArray.length}/${shopifycrm.length}`,
          "cards": stageFiveCard
        },
  
        // {
        //   "id": "ORDER_COMPLETED",
        //   "title": "Order Completed",
        //   "style": {
        //     "width": "21%",
        //     "background-color": "#212839"
        //   },
        //   "label": `${stageSixArray.length}/${shopifycrm.length}`,
        //   "cards": stageSixCard
        // }
      ]
    };
  
    return kanbanData;
  }