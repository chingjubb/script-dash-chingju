import React from 'react';
import {Button, Panel, ListGroup, ListGroupItem, Col, Row, Grid, Glyphicon, Alert, OverlayTrigger, Popover} from 'react-bootstrap';
import $ from 'jquery'; 

export default class Fill extends React.Component {

  constructor(props){
    super(props);
    this.togglePrescription = this.togglePrescription.bind(this);
    this.renderPrescription = this.renderPrescription.bind(this);
    this.state={showPrescription: false}
  }

  togglePrescription() {
    this.setState({ showPrescription: !this.state.showPrescription})
  }

  renderPrescription() {
    if (this.state.showPrescription) {
      return (<Alert bsStyle="warning">
              {this.props.prescription.medication_name}
              Total Quantity:  {this.props.prescription.total_quantity}
              Total Quantity Used: {this.props.prescription.total_quantity_used}
              SIG: {this.props.prescription.sig}
            </Alert>)
    }
    return null;
  }

  render() {
    let fill = this.props.fill;

    let popoverBottom = (<Popover id="popover-positioned-bottom" title={this.props.prescription.medication_name}>
                            <Alert>
                            Total Quantity:  {this.props.prescription.total_quantity} <br/>
                            Total Quantity Used: {this.props.prescription.total_quantity_used} <br/>
                            SIG: {this.props.prescription.sig}
                            </Alert>
                          </Popover>)

    return (<ListGroupItem>
              <Grid>
                <Row>
                  <Col md={1} xs={1}> {fill.id}
                  </Col>
                  <Col md={2} xs={2}> {fill.status === 'delivered' ? <Glyphicon glyph='ok' style={{marginRight:'10px'}}/> :  <Glyphicon glyph='random' style={{marginRight:'10px'}}/>}{fill.status}
                  </Col>
                  <Col md={2} xs={2}>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                      <Button>{fill.prescription_id} <Glyphicon glyph='info-sign' style={{marginLeft:'10px'}}/> </Button>
                    </OverlayTrigger>
                  </Col>
                  <Col md={2} xs={2}>{fill.scheduled_date}
                  </Col>
                  <Col md={2} xs={2}> {fill.deliver_after}
                  </Col>
                  <Col md={2} xs={2}>{fill.deliver_before}
                  </Col>
                  <Col md={1} xs={1}>{fill.quantity}
                  </Col>
                  
                </Row>
              </Grid>
              {this.renderPrescription()}
            </ListGroupItem>)
  }


}
