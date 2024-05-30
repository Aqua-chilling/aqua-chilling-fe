import { Wrapper } from './buy-aqua.styled';
import { CloseIconSVG } from '@/modules/marketplace/hard';
import Deposit from '@/assets/deposit.png';
import TonIcon from '@/assets/wallet/ton.png';
import Withdraw from '@/assets/withdraw.png';
import Swap from '@/assets/swap.png';
import ETH from '@/assets/eth.png';
import Aqua from '@/assets/wallet/aqua.png';
import CheckBox from '@/assets/wallet/box-check.png';
import Gem from '@/assets/wallet/gem.png';
import HeaderBg from '@/assets/wallet/header-bg.png';
import CloseIcon from '@/assets/wallet/close.png';
import Copy from '@/assets/wallet/copy.png';
export const BuyAqua = ({
  onClose,
  step,
  type,
  purchaseAqua
}: {
  onClose: () => void;
  step: number;
  type: number;
  purchaseAqua: () => void;
}) => {
  return (
    <Wrapper>
      <div
        className='overlay'
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className='buy-wrapper'>
        <div
          className='close'
          onClick={() => {
            onClose();
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
        </div>

        {type === 0 && (
          <>
            <div className='buy-title'>About SHELL</div>
            <div className='buy-subtitle'>
              SHELL is an in-game currency that users can easily earn by playing. During Open Beta, SHELL will be used
              for Leaderboard rankings. The more SHELL, the higher rank, the bigger Airdrop rewards. SHELL is not a
              crypto currency. It will be reset after Open Beta.
            </div>
            <div className='buy-button' onClick={purchaseAqua}>
              Earn more SHELL
            </div>
          </>
        )}
        {type === 1 && step === 0 && (
          <>
            <div className='buy-title'>About AQUA Token</div>
            <div className='buy-subtitle'>
              AQUA is the main token of Aquachilling. In Open Beta, users can get AQUA by completing Quests or buy
              directly in the game's Shop with $TON. In Open Beta, AQUA will only be used to buy game’s items.
            </div>
            <div className='buy-button' onClick={purchaseAqua}>
              Buy AQUA
            </div>
          </>
        )}

        {/* {type === 1 && step === 1 && (
          <>
            <div className='buy-title'>Buy AQUA Token</div>
            <div className='buy-input'>
              <div className='input-label'>Enter TON amount</div>
              <div className='input-wrapper'>
                <input type='number' placeholder='...' />
                <div className='input-token'>
                  <span>TON</span>
                  <img src={TonIcon} alt='' />
                </div>
              </div>
            </div>
            <div className='buy-output'>
              <div className='input-label'>You’ll receive</div>
              <div className='input-wrapper'>
                <div className='output-value'>123</div>
                <div className='input-token'>
                  <span>AQUA</span>
                  <img src={Aqua} alt='' />
                </div>
              </div>
            </div>
            <div className='buy-button'>Purchase</div>
          </>
        )}
        {type === 1 && step === 2 && (
          <>
            <img className='buy-success' src={CheckBox} alt='' />
            <div className='success-subtitle'>Purchased successful</div>
            <div className='success-title'>900,000</div>
            <div className='input-token'>
              <span>AQUA</span>
              <img src={Aqua} alt='' />
            </div>
            <div className='buy-button btn-cancel' onClick={onClose}>
              OK
            </div>
          </>
        )} */}
      </div>
    </Wrapper>
  );
};
