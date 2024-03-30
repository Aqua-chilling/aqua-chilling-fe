import { PrimaryButton } from '@/components/button/button.styled';
import nft from '@/assets/airdrop-detail/nft.png';
import { Wrapper } from './task.styled';

export const Task = ({ data }: any) => {
  return (
    <Wrapper>
      <div className='title'>What is Aquachilling airdrop?</div>
      <div className='subtitle'>
        The more point you accumulate from the quest, the more token will be dropped to your wallet address on TGE.
      </div>
      <div className='nft'>
        <div className='left'>
          <img src={nft} alt='' />
          <div className='flex flex-col align-start flex-1'>
            <div>300 points</div>
            <span>Trident Lv. 1</span>
            <div className='upgrade-btn' style={{ display: 'none' }}>
              <PrimaryButton w={160}>Upgrade NFT</PrimaryButton>
            </div>
          </div>
        </div>
        <div className='upgrade-btn-below'>
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
        {data?.map((item: any, key: number) => {
          return (
            <div className='table-row' key={key}>
              <div className='quest-name'>{item?.desc}</div>
              <div className='quest-point'>{item?.point}</div>
              <div className='quest-status'>
                <div className='status-0'>Start task</div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
