import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccount } from '../../data/Account/actions'

const AccountDetail = ({ accountDetailName, value }) => {
    const [editing, setEditing] = useState(false)
    const [accountInputValue, setAccountInputValue] = useState(value)
    const { user_id, name } = useSelector(state => state)
    const { access_token } = useSelector(state => state)
    const dispatch = useDispatch()

    // dispatches action that updates user's account details
    const handleUpdateAccount = () => {
        dispatch(updateAccount({
            user_id,
            name,
            access_token,
            account_data: {
                [accountDetailName]: accountInputValue
            }
        }))

        setEditing(false)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {editing ?
                <input
                    id={accountDetailName}
                    value={accountInputValue}
                    onChange={e => setAccountInputValue(e.target.value)}
                />
                :
                <p>{accountInputValue}</p>
            }
            {editing ?
                <button onClick={handleUpdateAccount}>Save</button>
                :
                <button onClick={() => setEditing(true)}>Edit</button>
            }
        </div>
    )
}

export default AccountDetail