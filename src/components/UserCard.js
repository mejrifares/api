import React from 'react'
import './CardUser.css'

const UserCard = ({item}) => {
    return (
        <div>
              
            <div className="container">
                <div class="cellphone-container">
                    <div className="movie">
                        <div class="menu"><i class="material-icons"></i></div>
                          <h1 style={{color: '#fff'}}>{item.name} {item.username}</h1>
                        <div className="text-movie-cont">

                            <div className="col1">
                                <h2 style={{ fontSize: '1.5rem', color: '#bfc2c4', textAlign: 'center' }}>{item.email}</h2>
                            </div>
                            <div style={{ color: '#f20f1a' }} className="col2">
                            <p style={{ color: '#bfc2c4' }}>{item.address.street} {item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}</p>
                                    <span style={{ color: '#bfc2c4' }}>{item.address.geo.lat} {item.address.geo.lng}</span>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p style={{ color: '#bfc2c4' }}>{item.phone} {item.website}</p>
                                    <span style={{ color: '#bfc2c4' }}>{item.company.name} {item.company.catchPhrase} {item.company.bs}</span>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserCard
