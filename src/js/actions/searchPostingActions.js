export const POSTSERVICEREQUEST = 'POSTSERVICEREQUEST';
export const POSTSERVICEREQUESTCLOSE = 'POSTSERVICEREQUESTCLOSE';

export const action = {
    postServiceRequestAction: () => ({
        type: POSTSERVICEREQUEST,
        payload: false
    }),
 postServiceRequestActionClose: () => ({
    type: POSTSERVICEREQUESTCLOSE,
    payload: false
})
};

export default action;