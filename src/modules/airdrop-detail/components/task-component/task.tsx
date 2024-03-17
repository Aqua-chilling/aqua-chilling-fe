import { PrimaryButton } from '@/components/button/button.styled';
import nft from '@/assets/airdrop-detail/nft.png';
import { Wrapper } from './task.styled';

export const Task = () => {
  return (
    <Wrapper>
      <div className='title'>What is Aquachilling airdrop?</div>
      <div className='subtitle'>
        The more point you accumulate from the quest, the more token will be dropped to your wallet address on TGE.
      </div>
      <div className='nft'>
        <div className='left'>
          <img src={nft} alt='' />
          <div className='flex flex-col align-start'>
            <div>300 points</div>
            <span>Trident Lv. 1</span>
          </div>
        </div>
        <div>
          <PrimaryButton w={160}>Upgrade NFT</PrimaryButton>
        </div>
      </div>
      <p>Complete tasks below to upgrade your NFT</p>
      <div className='table'>
        <div className='table-head'>
          <div className='quest-name'>Quest</div>
          <div className='quest-point'>Points</div>
          <div className='quest-status'>Status</div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>
            Follow us on X<span>(Join and get verify on Discord)</span>
          </div>
          <div className='quest-point'>Join Discord</div>
          <div className='quest-status'>
            <div className='status-0'>Connect wallet</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
