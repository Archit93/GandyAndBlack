export const BalanceColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <p>{Number(Number(data.amount)-Number(data.amountpaid))}</p>
        </div>
    );
}