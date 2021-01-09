import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	CButton,
	CCard,
	CCardBody,
	CCardGroup,
	CCol,
	CContainer,
	CForm,
	CInput,
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
	CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
	const usr = useSelector((state) => state.username)
	const pwd = useSelector((state) => state.password)

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState(false);

	const submit = () => {
    if (username === usr && password === pwd) {
      setError(false)
      history.push('/')
    } else {
      setError(true)
    }
  };

	return (
		<div className="c-app c-default-layout flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md="8">
						<CCardGroup>
							<CCard className="p-4">
								<CCardBody>
									<CForm>
										<h1>Login</h1>
										<p className="text-muted">Sign In to your account</p>
										<CInputGroup className="mb-3">
											<CInputGroupPrepend>
												<CInputGroupText>
													<CIcon name="cil-user" />
												</CInputGroupText>
											</CInputGroupPrepend>
											<CInput
												type="text"
												placeholder="Username"
												autoComplete="username"
												value={username}
												onChange={(e) => setUsername(e.target.value)}
											/>
										</CInputGroup>
										<CInputGroup className="mb-4">
											<CInputGroupPrepend>
												<CInputGroupText>
													<CIcon name="cil-lock-locked" />
												</CInputGroupText>
											</CInputGroupPrepend>
											<CInput
												type="password"
												placeholder="Password"
												autoComplete="current-password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</CInputGroup>
                    {error && <p className='text-danger'>Invalid Credentials</p>}
										<CRow>
											<CCol xs="6">
												<CButton color="primary" className="px-4" onClick={submit}>
													Login
												</CButton>
											</CCol>
										</CRow>
									</CForm>
								</CCardBody>
							</CCard>
						</CCardGroup>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	);
};

export default Login;
