import { MuiOtpInput } from 'mui-one-time-password-input'
import React from 'react'

const OTPInput = () => {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
        setOtp(newValue)
    }
    const matchIsNumeric = (text) => {
        const isNumber = Number(text)
        return (isNumber) && !isNaN(Number(text))
    }
    const validateChar = (value, index) => {
        return matchIsNumeric(value)
    }
    return (
        <>
            <MuiOtpInput length={4} value={otp} onChange={handleChange} validateChar={validateChar} />
        </>
    )
}

export default OTPInput