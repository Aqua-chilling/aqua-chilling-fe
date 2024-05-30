import { Wrapper } from './wallet.styled';
import Copy from '@/assets/copy.png';
import Deposit from '@/assets/deposit.png';
import Withdraw from '@/assets/withdraw.png';
import Swap from '@/assets/swap.png';
import ETH from '@/assets/eth.png';
import Aqua from '@/assets/wallet/aqua.png';

export const Wallet = () => {
  return (
    <Wrapper>
      <div className='wallet-wrapper'>
        <div>
          <div className='wallet'>
            <div className='wallet-top'>
              <div className='wallet-top-left'>
                <div className='wallet-label'>Wallet address</div>
                <div className='wallet-address'>
                  <span>0x8fcff8e7b84f799a7cbdf5e5dcc42bbd181b282c</span>
                  <img src={Copy} alt='' />
                </div>
              </div>
              <div className='wallet-top-right'>
                <div>
                  <img src={Deposit} alt='' />
                  <span>Deposit</span>
                </div>
                <div>
                  <img src={Withdraw} alt='' />
                  <span>Withdraw</span>
                </div>
              </div>
            </div>
            <div className='wallet-border'></div>
            <div className='wallet-bot'>
              <div className='wallet-bot-left'>
                <img src={Aqua} alt='' />
                <div className=''>
                  <div className='wallet-bot-label'>AQA Balance</div>
                  <div className='wallet-bot-value'>2,235.00 AQA</div>
                </div>
              </div>
              <div className='wallet-bot-left'>
                <img src={ETH} alt='' />
                <div className=''>
                  <div className='wallet-bot-label'>ETH Balance</div>
                  <div className='wallet-bot-value'>1.25 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='swap-wrapper'>
        <div>
          <div className='swap-label'>Swap token</div>
          <div className='swap-border'></div>
          <div className='swap-input'>
            <input type='text' placeholder='0.00' />
            <div className='swap-token'>
              <span>ETH</span>
              <img src={ETH} alt='' />
            </div>
          </div>
          <div className='swap-border-with-btn'>
            <div></div>
            <img src={Swap} alt='' className='btn-rotate' />
          </div>
          <div className='swap-input'>
            <div className='swap-output'>0.00</div>
            <div className='swap-token'>
              <span>ETH</span>
              <img src={ETH} alt='' />
            </div>
          </div>
          <div className='swap-border'></div>
          <div className='swap-summary'>1 ETH ~ 23,412 AQA</div>
        </div>
        <div className='btn-swap'>
          <div>Swap now</div>
        </div>
      </div>
    </Wrapper>
  );
};
