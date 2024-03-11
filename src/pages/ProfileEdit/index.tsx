import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import validator from 'validator';

import {Loading} from '../../components/Loading';

import { getUser, updateUser } from '../../services/userAPI';

import * as S from './styles';
import {SideBar} from '../../components/SideBar';

export const ProfileEdit = () => {
  state = {
    userName: '',
    userEmail: '',
    userImage: '',
    userDescription: '',
    isLoading: false,
    isSaveButtonDisabled: true,
  };

  componentDidMount() {
    this.handleGetUser();
  }

  const handleGetUser = async () => {
    setState({ isLoading: true });

    const user = await getUser();
    setState({
      userName: user.name,
      userEmail: user.email,
      userImage: user.image,
      userDescription: user.description,
      isLoading: false,
    });
  };

  const handleInputsValidation = () => {
    const { userName, userEmail, userImage, userDescription } = state;

    if (
      userName.length &&
      userEmail.length &&
      userImage.length &&
      userDescription.length
      // validator.isEmail(userEmail)
    ) {
      setState({ isSaveButtonDisabled: false });
    } else {
      setState({ isSaveButtonDisabled: true });
    }
  };

  const handleInputChange = (target) => {
    const { name, value } = target;

    setState(
      (previousState) => ({
        ...previousState,
        [name]: value,
      }),
      handleInputsValidation,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ isLoading: true });
    const { history } = props;
    const { userName, userEmail, userDescription, userImage } = this.state;

    const userData = {
      name: userName,
      email: userEmail,
      description: userDescription,
      image: userImage,
    };

    updateUser(userData).then(() => {
      this.setState({ isLoading: false });
      history.push('/profile');
    });
  };

    const {
      isLoading,
      userName,
      userEmail,
      userImage,
      userDescription,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <S.Container data-testid="page-profile-edit">
        <SideBar />
        {isLoading ? (
          <Loading />
        ) : (
          <S.Form onSubmit={(event) => this.handleSubmit(event)}>
            <S.ImgInput
              type="text"
              data-testid="edit-input-image"
              name="userImage"
              value={userImage}
              onChange={({ target }) => this.handleInputChange(target)}
            />
            <S.UserImage src={userImage} alt={userName} />
            <S.Label htmlFor="input-edit-name">
              Nome
              <input
                data-testid="edit-input-name"
                id="input-edit-name"
                type="text"
                name="userName"
                value={userName}
                onChange={({ target }) => this.handleInputChange(target)}
              />
            </S.Label>
            <S.Label htmlFor="input-edit-email">
              Email
              <input
                data-testid="edit-input-email"
                id="input-edit-email"
                type="text"
                name="userEmail"
                value={userEmail}
                onChange={({ target }) => this.handleInputChange(target)}
              />
            </S.Label>
            <S.Label htmlFor="input-edit-description">
              Descrição
              <textarea
                data-testid="edit-input-description"
                id="input-edit-description"
                name="userDescription"
                value={userDescription}
                onChange={({ target }) => this.handleInputChange(target)}
              />
            </S.Label>
            <S.Button
              type="submit"
              data-testid="edit-button-save"
              disabled={isSaveButtonDisabled}
            >
              Salvar
            </S.Button>
          </S.Form>
        )}
      </S.Container>
    );
  }