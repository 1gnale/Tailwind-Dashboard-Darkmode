import data from '../../data/data.json';
import OverviewCard from './OverviewCard';
import { convertNumberToK } from '../utils/convertNumber.ts';

const OverviewContainer = () => {

    return (
        <section className='flex flex-wrap absolute top-48 left-0 right-0'>
            {
                data.overview.map((item, idx) => {
                    return (
                        <OverviewCard key={idx}
                            count={convertNumberToK(item.count)}
                            id={item.id}
                            isUp={item.isUp}
                            network={item.network}
                            today={item.today}
                            type={item.type}
                            username={item.username} />
                    )
                })
            }
        </section>
    );
}

export default OverviewContainer;