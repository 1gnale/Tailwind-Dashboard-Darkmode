import iconUp from '../assets/icon-up.svg';
import iconDown from '../assets/icon-down.svg';
import { iconsList, networkColors } from '../utils';


interface OverviewCardProps {
    id: number;
    username: string;
    network: string;
    count: number | string;
    type: string;
    today: number;
    isUp: boolean;
}



const OverviewCard = ({ username, network, count, type, isUp, today }: OverviewCardProps) => {
    const icon = iconsList.find(item => item.network === network)?.icon;
    const iconToday = isUp ? iconUp : iconDown;

    return (
        <article className="dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125 hover:brightness-95 cursor-pointer text-center bg-Light-Grayish-Blue w-80 h-52 mb-4 rounded-[5px] mx-auto overflow-hidden">
            <div className={`${networkColors[network]} h-1 mb-7`}></div>
            <div className='flex items-center justify-center gap-2'>
                <img src={icon} alt={network} />
                <p className='text-xs text-Dark-Grayish-Blue font-bold' >{username}</p>
            </div>
            <p className='text-[56px] dark:text-white font-bold text-Very-Dark-Blue' >{count}</p>
            <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-5'>{type}</p>
            <div className='flex items-center justify-center gap-1' >
                <img src={iconToday} alt="arrow" />
                <p className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"}`} >{today} Today</p>
            </div>
        </article>
    );
}

export default OverviewCard;