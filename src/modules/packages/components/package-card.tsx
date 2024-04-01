interface ICard {
  thumnail: string;
  title: string;
  price: number;
  amount: number;
  setAmount: (amount: number) => void;
}

export const PackageCard = ({ thumnail, title, price, amount, setAmount }: ICard) => {
  return (
    <div className='package-card'>
      <img src={thumnail} alt='' className='' />
      <div className='card-title'>{title}</div>
      <div className='card-border'></div>
      <div className='card-info'>
        <div className='card-price'>${price}</div>
        <div className='card-amount'>
          <div
            className='amount-btn'
            onClick={() => {
              if (amount === 0) return;
              setAmount(amount - 1);
            }}
          >
            -
          </div>
          <div className='amount'>{amount}</div>
          <div
            className='amount-btn'
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};
