import Image from 'next/image';
import * as React from 'react';
import TitleCardItem from '../components/About/TitleCardItem';

export interface ITitleCardProps {
}

export default function TitleCard (props: ITitleCardProps) {
  return (
    <div className='flex justify-between items-center'>
     
    <TitleCardItem
    title='$65 bn'
    description='average daily volume'
    image='/bank_icon.png'
    />
    <TitleCardItem
    title='$300 bn'
    description='Spot transection in 2022'
    image='/bank_icon.png'
    />
    <TitleCardItem
    title='24/7 '
    description='customer support in 65 languages'
    image='/bank_icon.png'
    />
    
    </div>
  );
}
