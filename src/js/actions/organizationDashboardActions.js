const OPEN_MODAL='OPEN_MODAL';
const CLOSE_MODAL='CLOSE_MODAL';
const SET_GOOD_OR_SERVICE_SELECTED='SET_GOOD_OR_SERVICE_SELECTED';
const SET_GOOD_OR_SERVICE='SET_GOOD_OR_SERVICE';
const SET_DESCRIPTION='SET_DESCRIPTION';
const SET_RATE='SET_RATE';
const SET_MINIMUM_AMOUNT='SET_MINIMUM_AMOUNT';
const SET_MAXIMUM_AMOUNT='SET_MAXIMUM_AMOUNT';
const SET_RATE_TYPE='SET_RATE_TYPE';

export default {
    openModal:()=>{
        return{
            type:OPEN_MODAL,
            isModalOpen: true
        }
    },
    closeModal:()=>{
        return{
            type:CLOSE_MODAL,
            isModalOpen: false
        }
    },
    setGoodOrServiceSelected: (isGoodOrServiceSelected) => {
        return{
            type:SET_GOOD_OR_SERVICE_SELECTED,
            isGoodOrServiceSelected
        }
    },
    setGoodOrService: (goodOrService) => {
        return{
            type:SET_GOOD_OR_SERVICE,
            goodOrService
        }
    },
    setDescription: (description) => {
        return{
            type:SET_DESCRIPTION,
            description
        }
    },
    setRate: (rate) => {
        return{
            type:SET_RATE,
            rate
        }
    },
    setMinimumAmount: (minimumAmount) => {
        return{
            type:SET_MINIMUM_AMOUNT,
            minimumAmount
        }
    },
    setMaximumAmount: (maximumAmount) => {
        return{
            type:SET_MAXIMUM_AMOUNT,
            maximumAmount
        }
    },
    setRateType: (rateType) => {
        return{
            type:SET_RATE_TYPE,
            rateType
        }
    }
}