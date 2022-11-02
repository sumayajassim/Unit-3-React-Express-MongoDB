import React, {useState} from 'react'
import { useEffect } from 'react';
import Battery from '../Battery/Battery'
import {register, unregister} from '../../utils/battery';

function BatteryHookContainer() {
    // const [level, setLevel] = useState(0.55)
    const [batteryData, setBatteryData] = useState({
        level: .55,
        charging: true
    })
    const chargeBattery = () =>{
        if(batteryData.level < 1){
            setBatteryData({
                ...batteryData,
                level: batteryData.level+0.01});

        }
    }

    useEffect(() =>{
        // register(updateBattery)
        // return () =>{
        //     unregister(updateBattery)
        // }
        console.log('useEffect Ran!!');
    })

  return (
    <div>
         <Battery level={batteryData.level} charging={batteryData.charging}/>
         <button onClick={chargeBattery}>Charge Battery!</button>
    </div>
  )
}

export default BatteryHookContainer