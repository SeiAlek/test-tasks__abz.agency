import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Banner } from '../components/Banner';
import { IllustratedSection } from '../components/IllustratedSection';
import { Layout } from '../components/Layout';
import { SignUp } from '../components/SignUp';
import { Users } from '../components/Users';
import { ImageWrapper, Wrapper } from '../components/Wrappers';
import { API_URL_USERS, SECTIONS } from '../helpers';
import * as store from '../store';

export const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(store.loadUsers(API_URL_USERS));
  }, [dispatch]);

  useEffect(() => {
    dispatch(store.loadPositions());
  }, [dispatch]);

  return (
    <Layout>
      <>
        <ImageWrapper>
          <Banner
            title="Test assignment for Frontend Developer position"
            text="We kindly remind you that your test assignment should be submitted as a link
              to github/bitbucket repository. Please be patient, we consider and respond
              to every application that meets minimum requirements. We look forward to your
              submission. Good luck! The photo has to scale in the banner area on the
              different screens"
            link={SECTIONS.signUp.id}
            textLink="Sign up now"
          />
        </ImageWrapper>

        <Wrapper type="primary" section={SECTIONS.about}>
          <IllustratedSection
            image="/images/man-laptop-v1.svg"
            title="I am cool frontend developer"
            link={SECTIONS.signUp.id}
            textLink="Sign up now"
          >
            <>
              <p>
                We will evaluate how clean your approach to writing CSS and
                Javascript code is. You can use any CSS and Javascript 3rd party
                libraries without any restriction.
              </p>
              <p>
                If 3rd party css/javascript libraries are added to the project
                via bower/npm/yarn you will get bonus points. If you use any
                task runner (gulp/webpack) you will get bonus points as well.
                Slice service directory page P​SD mockup​ into HTML5/CSS3.
              </p>
            </>
          </IllustratedSection>
        </Wrapper>

        <Wrapper type="secondary" section={SECTIONS.users}>
          <Users />
        </Wrapper>

        <Wrapper type="primary" section={SECTIONS.signUp}>
          <SignUp />
        </Wrapper>
      </>
    </Layout>
  );
};
