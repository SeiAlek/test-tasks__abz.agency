import React, { useState } from 'react';
import { PHOTO_COVER } from '../../helpers';
import './UserCard.scss';

interface Props {
  user: User;
}

export const UserCard = ({ user }: Props) => {
  const {
    name,
    photo,
    position,
    email,
    phone,
  } = user;

  const [imageUrl, setImageUrl] = useState(photo);
  const [nameTruncated] = useState(name);
  const handleErrorImage = () => {
    setImageUrl(PHOTO_COVER);
  };

  return (
    <div className="UserCard">
      <img
        src={imageUrl}
        alt={`${position} ${name}`}
        className="UserCard__Photo"
        onError={handleErrorImage}
      />
      <h3 className="UserCard__Name" data-title={nameTruncated}>{name}</h3>
      <p className="UserCard__Position">{position}</p>
      <a
        href={`mailto:${email}?subject=Mail from TestTask Site`}
        className="UserCard__Link"
        data-title={email}
      >
        {email}
      </a>
      <a
        href={`tel:${phone}`}
        className="UserCard__Link"
        data-title={phone}
      >
        {phone}
      </a>
    </div>
  );
};
