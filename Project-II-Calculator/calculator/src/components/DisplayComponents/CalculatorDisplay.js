import React from 'react';
import './Display.css';
import NumberButton from '..///ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton';
import LargeNumberButton from '../ButtonComponents/LargeNumberButton';
import RedButtons from '..//ButtonComponents/RedButtons'

const CalculatorDisplay = () => {
    return (

        <div>
            <div>
                <LargeNumberButton text={0} />
            </div>
            <div>
                <ActionButton text={'clear'} ActionButtonStyle='banana' />
                <RedButtons text={'÷'} />

            </div>
            <div>
                <NumberButton text={7} />
                <NumberButton text={8} />
                <NumberButton text={9} />
                <RedButtons text={'x'} />
            </div>
            <div>

                <NumberButton text={4} />
                <NumberButton text={5} />
                <NumberButton text={6} />
                <RedButtons text={'-'} />
            </div>
            <div>
                <NumberButton text={1} />
                <NumberButton text={2} />
                <NumberButton text={3} />
                <RedButtons text={'+'} />
            </div>

            <div>
                <ActionButton text={0} />
                <RedButtons text={'='} />
            </div>


        </div>

    )
}

export default CalculatorDisplay