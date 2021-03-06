import axios from '../axios'

// interview post request
export const addInterview = data => {
    const { user_id, job_id, access_token, interview_data } = data
    return axios.post(`user/${user_id}/jobs/${job_id}/interviews`, interview_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// interview patch request
export const updateInterview = data => {
    const { user_id, job_id, interview_data, interview_id, access_token } = data
    return axios.patch(`user/${user_id}/jobs/${job_id}/interviews/${interview_id}`, interview_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// interview delete request
export const deleteInterview = data => {
    const { user_id, job_id, interview_id, access_token } = data
    return axios.delete(`user/${user_id}/jobs/${job_id}/interviews/${interview_id}`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}