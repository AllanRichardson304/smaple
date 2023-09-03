import { useState } from 'react'
import { Col, Row, Tabs, Switch, Button, Input, Form ,Select,Drawer} from 'antd';
import './Home.scss'
import TabPane from 'antd/es/tabs/TabPane';
import mail from '../../../assets/img/svg/mail.svg'
import location from '../../../assets/img/svg/location.svg'
import call from '../../../assets/img/svg/call.svg'
import world from '../../../assets/img/svg/world.svg'
import user from '../../../assets/img/svg/user.svg'
import callRequest from '../../../assets/img/svg/call-request.svg'
import info from '../../../assets/img/svg/info.svg'
import copy from '../../../assets/img/svg/copy.svg'
import share from '../../../assets/img/svg/share.svg'
import more from '../../../assets/img/svg/more.svg'
import face from '../../../assets/img/svg/face.svg'
import link from '../../../assets/img/svg/link.svg'
import linksecond from '../../../assets/img/svg/link-second.svg'
import upload from '../../../assets/img/svg/upload.svg'
import send from '../../../assets/img/svg/send.svg'
import arrow from '../../../assets/img/svg/down-arrow.svg'
import usertag from '../../../assets/img/svg/user-tag.svg'
import chatimg from '../../../assets/img/svg/message-circle.svg'
import close from '../../../assets/img/svg/close.svg'

export default function Home() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawerChat = () => {
    setChat(true);
  };
  
  const onClose = () => {
    setOpen(false);
    setChat(false);
  };
  return (
    <>
      <section className='home'>
        <Row>
          <Col xs={0} sm={0} md={0} lg={7} xl={7} xxl={5}>
            <div className='home__header'>
              <Tabs defaultActiveKey="tab1" centered>
                <TabPane tab=" User Info" key="tab1">
                  <div className='home__tab-card'>
                    <div className='home__profile-content'>
                      <div className='home__profile'>
                        RF
                      </div>
                      <h5>Ruby Franecki</h5>

                      <div className='home__mail-contaner'>
                        <img src={mail} alt="" />
                        <p>rubyfraneki@worktual.com</p>
                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <img src={location} alt="" />
                          <p>San Francisco, CA</p>
                        </div>
                        <div>
                          <h6>View Map</h6>
                        </div>

                      </div>
                      <div className='home__mail-contaner'>
                        <img src={call} alt="" />
                        <p>99986754324</p>
                      </div>
                      <div className='home__mail-contaner'>
                        <img src={world} alt="" />
                        <p>192.158.1.38</p>
                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>

                        </div>
                        <div>
                          <h6>Update Profile</h6>
                        </div>
                      </div>
                    </div>
                    <div className='home__profile-content'>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p className='home__font-w'>Tags</p>
                        </div>
                        <div>
                          <h6>Edit</h6>
                        </div>
                      </div>
                      <div className='home__tag-list'>
                        <div className='home__tag'>
                          Vectone UK website visitor
                        </div>
                        <div className='home__tag'>
                          Number Validation
                        </div>
                        <div className='home__tag'>
                          Free SIM
                        </div>
                      </div>
                    </div>
                    <div className='home__profile-content'>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p className='home__font-w'>Block Request</p>
                        </div>

                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <img src={user} alt="" />
                          <p>Block Customer Request  <span><img src={info} alt="" /></span> </p>
                        </div>
                        <div>
                          <Switch size="small" />
                        </div>

                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <img src={callRequest} alt="" />
                          <p>Do Not Disturb Request  <span><img src={info} alt="" /></span> </p>
                        </div>
                        <div>
                          <Switch size="small" />
                        </div>

                      </div>
                    </div>
                    <div className='home__profile-content-last'>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p className='home__font-w'>Voice Biometric</p>
                        </div>

                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p>Status</p>
                        </div>


                      </div>

                    </div>
                  </div>

                </TabPane>
                <TabPane tab="Interactions" key="tab2">
                  <div className='home__tab-card'>

                  </div>
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={14}>
            <div className='home__header-center'>
              <div>
                <p>Ruby Franecki <span>01:42</span></p>
                <h6>+353 1513 7450</h6>
              </div>
              <div className='home__btn-center'>
                <Button >Transfer</Button>
                <img src={more} alt="" />
              </div>
            </div>
            <div className='home__main-content'>
              <div className='home__send-mail'>
                <div className='home__from'>
                  <p>From:</p>
                  <h6>ruby123@gmail.com</h6>
                </div>
                <div className='home__from'>
                  <p>Subject:</p>
                  <h6>Payment Issue</h6>
                </div>
                <div className='home__from'>
                  <h6>Hello sir, <br></br> I hope this email finds you well. I am writing to provide you with a comprehensive analysis of the [Product Name] based on our research and evaluation. This analysis aims to assist in making informed decisions regarding the product's viability, market potential, and strategic implications. Here are the key findings from our analysis. <br />Thanking You.</h6>
                </div>
                <div className='home__time'>
                  4:58 PM
                </div>
              </div>
             
              <div>
                <div className='home__mail-update'>
                  <div className='home__mail-inner'>
                    <div className='home__to-content'>
                      <div className='home__input-content'>
                        <p className='home__email-w'>To</p>
                        <Form>
                          <Form.Item>
                            <Input className='home__input-box' placeholder='Enter Email'></Input>
                          </Form.Item>
                        </Form>

                      </div>
                      <div className='home__to-cc'>
                        <p>Cc</p>
                        <p>Bcc</p>
                      </div>
                    </div>
                    <div className='home__to-content'>
                      <div className='home__input-content'>
                        <p className='home__email-w'>Subject :</p>
                        <Form>
                          <Form.Item>
                            <Input className='home__input-box' placeholder='Enter Subject'></Input>
                          </Form.Item>
                        </Form>

                      </div>

                    </div>
                    <div className='home__to-content-end'>
                      <div className='home__input-content'>
                        <Form>
                          <Form.Item>
                            <Input className='home__input-box' placeholder='Enter Here'></Input>
                          </Form.Item>
                        </Form>

                      </div>

                    </div>
                  </div>
                  <div className='home__mail-footer'>
                    <div className='home__footer-inner'>
                      <Select
                        showSearch
                        placeholder="Select"
                        suffixIcon={
                          <img className='cursor' src={arrow} alt="" />
                        }
                        options={[
                          {
                            value: 'Reply Via',
                            label: 'Reply Via',
                          },
                         
                        ]}
                      />
                      <img className='cursor' src={face} alt="" />
                      <img className='cursor' src={link} alt="" />
                      <img className='cursor' src={linksecond} alt="" />
                      <img className='cursor' src={upload} alt="" />
                    </div>
                    <div>
                      <img className='cursor' src={send} alt="" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={7} xl={7} xxl={5}>
            <div className='home__header'>
              <Tabs defaultActiveKey="tab1" centered>
                <TabPane tab=" Agent Assist" key="tab1">
                  <div className='home__tab-card-second'>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                  </div>

                </TabPane>
                <TabPane tab="Co - Chat" key="tab2">
                  <div className='home__tab-card'>

                  </div>
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
        <div className='home__profile-tag' onClick={showDrawer} >
             <img src={usertag} alt="" />
        </div>
        <div className='home__profile-chat' onClick={showDrawerChat}>
             <img src={chatimg} alt="" />
        </div>
      </section>
      <Drawer  placement="left"  onClose={onClose} open={open}  classNam="menu"  >
      <div className='home__header'>
                 <img className='home__drawer-close' src={close} alt="" onClick={onClose}  />
              <Tabs defaultActiveKey="tab1" centered>
                <TabPane tab=" User Info" key="tab1">
                  <div className='home__tab-card-responsive'>
                    <div className='home__profile-content'>
                      <div className='home__profile'>
                        RF
                      </div>
                      <h5>Ruby Franecki</h5>

                      <div className='home__mail-contaner'>
                        <img src={mail} alt="" />
                        <p>rubyfraneki@worktual.com</p>
                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <img src={location} alt="" />
                          <p>San Francisco, CA</p>
                        </div>
                        <div>
                          <h6>View Map</h6>
                        </div>

                      </div>
                      <div className='home__mail-contaner'>
                        <img src={call} alt="" />
                        <p>99986754324</p>
                      </div>
                      <div className='home__mail-contaner'>
                        <img src={world} alt="" />
                        <p>192.158.1.38</p>
                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>

                        </div>
                        <div>
                          <h6>Update Profile</h6>
                        </div>
                      </div>
                    </div>
                    <div className='home__profile-content'>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p className='home__font-w'>Tags</p>
                        </div>
                        <div>
                          <h6>Edit</h6>
                        </div>
                      </div>
                      <div className='home__tag-list'>
                        <div className='home__tag'>
                          Vectone UK website visitor
                        </div>
                        <div className='home__tag'>
                          Number Validation
                        </div>
                        <div className='home__tag'>
                          Free SIM
                        </div>
                      </div>
                    </div>
                    <div className='home__profile-content'>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p className='home__font-w'>Block Request</p>
                        </div>

                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <img src={user} alt="" />
                          <p>Block Customer Request  <span><img src={info} alt="" /></span> </p>
                        </div>
                        <div>
                          <Switch size="small" />
                        </div>

                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <img src={callRequest} alt="" />
                          <p>Do Not Disturb Request  <span><img src={info} alt="" /></span> </p>
                        </div>
                        <div>
                          <Switch size="small" />
                        </div>

                      </div>
                    </div>
                    <div className='home__profile-content-last'>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p className='home__font-w'>Voice Biometric</p>
                        </div>

                      </div>
                      <div className='home__mail-contaner-outer'>
                        <div className='home__mail-contaner-second'>
                          <p>Status</p>
                        </div>


                      </div>

                    </div>
                  </div>

                </TabPane>
                <TabPane tab="Interactions" key="tab2">
                  <div className='home__tab-card-responsive'>

                  </div>
                </TabPane>
              </Tabs>
            </div>
      </Drawer>
      <Drawer  placement="left"  onClose={onClose} open={chat}  classNam="menu"  >
      <div className='home__header'>
      <img className='home__drawer-close' src={close} alt="" onClick={onClose}  />
              <Tabs defaultActiveKey="tab1" centered>
                <TabPane tab=" Agent Assist" key="tab1">
                  <div className='home__tab-card-second-responsive'>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                    <div className='home__border-card'>
                      <div className='home__border-card-inner'>
                        <div>
                          <h6>Product enquiry</h6>
                          <p>Reason • 5:04 PM</p>
                        </div>
                        <div className='home__share-img'>
                          <img src={copy} alt="" />
                          <img src={share} alt="" />
                        </div>
                      </div>
                      <div className='home__description'>
                        <p>Ok, I can help with the dispute for the withdrawal of 100000. Once i initiate the process. it will take 24 hrs  to process your request.</p>
                      </div>
                    </div>
                  </div>

                </TabPane>
                <TabPane tab="Co - Chat" key="tab2">
                  <div className='home__tab-card-second-responsive'>

                  </div>
                </TabPane>
              </Tabs>
            </div>
      </Drawer>
    </>
  )
}
