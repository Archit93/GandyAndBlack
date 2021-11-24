export const createCRMData = (crmDetails) => {
  const stageOneArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-1'));
  const stageTwoArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-2'));
  const stageThreeArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-3'));
  const stageFourArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-4'));
  const stageFiveArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-5'));
  const stageSixArray = crmDetails.filter((crmDetail) => (crmDetail.currentstage === 'stage-6'));

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
        "label": `${stageOneArray.length}/${crmDetails.length}`,
        "style": {
          "width": "16%",
          "background-color": "#212839"
        },
        "cards": stageOneCard
      },
      {
        "id": "PICK_PACK",
        "title": "Pick And Pack",
        "label": `${stageTwoArray.length}/${crmDetails.length}`,
        "style": {
          "width": "16%",
          "background-color": "#212839"
        },
        "cards": stageTwoCard
      },

      {
        "id": "OUTFOR_DELIVERY",
        "title": "Out For Delivery",
        "label": `${stageThreeArray.length}/${crmDetails.length}`,
        "style": {
          "width": "16%",
          "background-color": "#212839"
        },
        "cards": stageThreeCard
      },

      {
        "id": "PARCEL_RECEIVED",
        "title": "Parcel Received",
        "style": {
          "width": "16%",
          "background-color": "#212839"
        },
        "label": `${stageFourArray.length}/${crmDetails.length}`,
        "cards": stageFourCard
      },

      {
        "id": "PAYMENT_RECEIVED",
        "title": "Payment Received",
        "style": {
          "width": "16%",
          "background-color": "#212839"
        },
        "label": `${stageFiveArray.length}/${crmDetails.length}`,
        "cards": stageFiveCard
      },

      {
        "id": "ORDER_COMPLETED",
        "title": "Order Completed",
        "style": {
          "width": "16%",
          "background-color": "#212839"
        },
        "label": `${stageSixArray.length}/${crmDetails.length}`,
        "cards": stageSixCard
      }
    ]
  };

  return kanbanData;
}