/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import {Button, Panel, ListGroup, ListGroupItem, Col, Row, Grid, Glyphicon} from 'react-bootstrap';
import $ from 'jquery'; 
import Fill from './fill'
import _ from 'lodash'

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getFills = this.getFills.bind(this);
    let fills = [{"id":1,"status":"delivered","scheduled_date":"2016-05-31","deliver_after":"2000-01-01T18:00:00.000Z","deliver_before":"2000-01-01T21:00:00.000Z","quantity":60,"prescription_id":3},{"id":2,"status":"delivered","scheduled_date":"2016-04-13","deliver_after":"2000-01-01T09:00:00.000Z","deliver_before":"2000-01-01T12:00:00.000Z","quantity":45,"prescription_id":1},{"id":3,"status":"delivered","scheduled_date":"2016-05-19","deliver_after":"2000-01-01T18:00:00.000Z","deliver_before":"2000-01-01T21:00:00.000Z","quantity":45,"prescription_id":1},{"id":4,"status":"upcoming","scheduled_date":"2016-06-16","deliver_after":null,"deliver_before":null,"quantity":null,"prescription_id":4},{"id":5,"status":"upcoming","scheduled_date":"2016-06-28","deliver_after":"2000-01-01T12:00:00.000Z","deliver_before":"2000-01-01T15:00:00.000Z","quantity":180,"prescription_id":8},{"id":6,"status":"delivered","scheduled_date":"2016-05-25","deliver_after":"2000-01-01T07:00:00.000Z","deliver_before":"2000-01-01T10:00:00.000Z","quantity":90,"prescription_id":9},{"id":7,"status":"delivered","scheduled_date":"2016-06-15","deliver_after":"2000-01-01T12:00:00.000Z","deliver_before":"2000-01-01T15:00:00.000Z","quantity":100,"prescription_id":2},{"id":8,"status":"upcoming","scheduled_date":"2016-07-18","deliver_after":"2000-01-01T12:00:00.000Z","deliver_before":"2000-01-01T15:00:00.000Z","quantity":140,"prescription_id":12},{"id":9,"status":"upcoming","scheduled_date":"2016-04-22","deliver_after":"2000-01-01T12:00:00.000Z","deliver_before":"2000-01-01T15:00:00.000Z","quantity":null,"prescription_id":13},{"id":10,"status":"delivered","scheduled_date":"2016-05-26","deliver_after":"2000-01-01T12:00:00.000Z","deliver_before":"2000-01-01T15:00:00.000Z","quantity":30,"prescription_id":11},{"id":11,"status":"upcoming","scheduled_date":"2016-06-21","deliver_after":null,"deliver_before":null,"quantity":null,"prescription_id":7},{"id":12,"status":"delivered","scheduled_date":"2016-04-15","deliver_after":"2000-01-01T12:00:00.000Z","deliver_before":"2000-01-01T15:00:00.000Z","quantity":5,"prescription_id":5},{"id":13,"status":"upcoming","scheduled_date":"2016-06-30","deliver_after":"2000-01-01T15:00:00.000Z","deliver_before":"2000-01-01T18:00:00.000Z","quantity":5,"prescription_id":1},{"id":14,"status":"upcoming","scheduled_date":"2016-06-20","deliver_after":null,"deliver_before":null,"quantity":null,"prescription_id":6},{"id":15,"status":"delivered","scheduled_date":"2016-06-05","deliver_after":"2000-01-01T14:00:00.000Z","deliver_before":"2000-01-01T17:00:00.000Z","quantity":100,"prescription_id":7},{"id":16,"status":"delivered","scheduled_date":"2016-04-12","deliver_after":"2000-01-01T09:00:00.000Z","deliver_before":"2000-01-01T12:00:00.000Z","quantity":90,"prescription_id":9},{"id":17,"status":"delivered","scheduled_date":"2016-05-10","deliver_after":"2000-01-01T13:00:00.000Z","deliver_before":"2000-01-01T21:00:00.000Z","quantity":14,"prescription_id":11},{"id":18,"status":"delivered","scheduled_date":"2016-05-24","deliver_after":"2000-01-01T19:00:00.000Z","deliver_before":"2000-01-01T22:00:00.000Z","quantity":14,"prescription_id":1},{"id":19,"status":"upcoming","scheduled_date":"2016-06-18","deliver_after":null,"deliver_before":null,"quantity":14,"prescription_id":1},{"id":20,"status":"delivered","scheduled_date":"2016-04-22","deliver_after":null,"deliver_before":null,"quantity":14,"prescription_id":13},{"id":21,"status":"upcoming","scheduled_date":"2016-06-16","deliver_after":"2000-01-01T07:00:00.000Z","deliver_before":"2000-01-01T10:00:00.000Z","quantity":40,"prescription_id":2}]
    let prescriptions = [{"id":1,"quantity":60,"total_quantity":120,"total_quantity_used":60,"medication_name":"Ibuprofen 600 MG","written_at":null,"last_filled_at":"2016-06-01T02:46:03.000Z","rx_number":"651913004","ndc":"53746046505","sig":"Take 1 tablet (600 mg total) by mouth every 6 (six) hours as needed for Pain.","user_id":3},{"id":2,"quantity":45,"total_quantity":135,"total_quantity_used":90,"medication_name":"Citalopram Hbr 20 MG","written_at":null,"last_filled_at":"2016-05-19T19:35:07.000Z","rx_number":"375259001","ndc":"13668001005","sig":"Take One And One Half Tablets Daily","user_id":5},{"id":3,"quantity":180,"total_quantity":180,"total_quantity_used":180,"medication_name":"Cheratussin Ac 100-10MG/5","written_at":null,"last_filled_at":"2016-04-28T18:43:03.000Z","rx_number":"162400005","ndc":"00603107558","sig":"Take 1-2 teaspoonful (5 to 10mls) by mouth every 4-6 hours as needed","user_id":1},{"id":4,"quantity":90,"total_quantity":360,"total_quantity_used":90,"medication_name":"Atorvastatin Calcium 40 MG","written_at":null,"last_filled_at":"2016-05-24T23:59:17.000Z","rx_number":"988219002","ndc":"60505258009","sig":"1 tablet Once a day Orally 90 days","user_id":1},{"id":5,"quantity":240,"total_quantity":240,"total_quantity_used":240,"medication_name":"Hydromorphone Hcl 2 MG","written_at":null,"last_filled_at":"2016-04-18T17:30:29.000Z","rx_number":"947809001","ndc":"00406324301","sig":"Take 2 tabs (equals 4mgs) four times daily as needed","user_id":1},{"id":6,"quantity":9.9,"total_quantity":39.6,"total_quantity_used":null,"medication_name":"Flonase allergy relief 50 MCG","written_at":null,"last_filled_at":null,"rx_number":"767137003","ndc":"53100020010","sig":"2 sprays in each nostril twice a day","user_id":1},{"id":7,"quantity":30,"total_quantity":90,"total_quantity_used":30,"medication_name":"Strattera 25 MG","written_at":null,"last_filled_at":"2016-05-26T20:46:07.000Z","rx_number":"260706004","ndc":"00002322830","sig":"Take 1 capsule by mouth each day. ","user_id":2},{"id":8,"quantity":5,"total_quantity":15,"total_quantity_used":10,"medication_name":"Besivance 0.6 %","written_at":null,"last_filled_at":"2016-04-28T18:58:27.000Z","rx_number":"462172004","ndc":"24208044605","sig":"1 Drop In Left Eye Four Times A Day; Start Using 3 Days Prior To Surgery","user_id":2},{"id":9,"quantity":56,"total_quantity":240,"total_quantity_used":null,"medication_name":"Savella 25 MG","written_at":null,"last_filled_at":null,"rx_number":"158539054","ndc":"00456152560","sig":"Take 1 tablet by mouth 2 two times daily","user_id":5},{"id":10,"quantity":100,"total_quantity":400,"total_quantity_used":100,"medication_name":"Vitamin b-12 1000 MCG","written_at":null,"last_filled_at":"2016-06-05T21:15:32.000Z","rx_number":"973306008","ndc":"00536355601","sig":"Take 1 tablet (1,000 mcg total) by mouth Daily.","user_id":3},{"id":11,"quantity":90,"total_quantity":90,"total_quantity_used":90,"medication_name":"Oxycodone Hcl 10 MG","written_at":null,"last_filled_at":"2016-04-08T22:02:36.000Z","rx_number":"388064","ndc":"68382079401","sig":"Take one tablet by mouth three times daily","user_id":2},{"id":12,"quantity":28,"total_quantity":120,"total_quantity_used":42,"medication_name":"Aspirin Ec 81 MG","written_at":null,"last_filled_at":"2016-06-09T00:17:00.000Z","rx_number":"963004027","ndc":"00603002632","sig":"Take 1 tablet by mouth daily ","user_id":4},{"id":13,"quantity":40,"total_quantity":280,"total_quantity_used":40,"medication_name":"Novolin R 100/ML","written_at":null,"last_filled_at":"2016-04-15T20:44:41.000Z","rx_number":"373999001","ndc":"00169183311","sig":"Inject 10 units subcutaneously four times daily.","user_id":5}]
    this.state = {fills: fills, prescriptions: prescriptions};
    this.header = this.header.bind(this);
  }

  componentDidMount() {
    //this.getFills();
  }

  handleClick () {
    console.log("click!")
  }

  getFills() {
    $.ajax({
       url: 'http://localhost:8080/api/fills',
       type: 'GET',
       crossOrigin: true,
       crossDomain: true,
       headers: {'Access-Control-Allow-Origin': '*'},
       dataType: 'json',
       success: function(data) {
         console.log(data)
       },error: function (e) {
        console.log(e)

       }
    });
  }

  header() {


    return (
                <Grid>
                  <Row>
                    <Col md={1} xs={1}>ID
                    </Col>
                    <Col md={2} xs={2}>Status
                    </Col>
                    <Col md={2} xs={2}>Prescription ID
                    </Col>
                    <Col md={2} xs={2}>Scheduled Date
                    </Col>
                    <Col md={2} xs={2}>Deliver After
                    </Col>
                    <Col md={2} xs={2}>Deliver Before
                    </Col>
                    <Col md={1} xs={1}>Quantity
                    </Col>
                    
                  </Row>
                </Grid>)
  }

  render() {
    let prescriptions = this.state.prescriptions;
    return (
      <div>
        <Panel collapsible defaultExpanded header={this.header()} style={{margin:'30px'}}>
         

          <ListGroup fill >
          

          {this.state.fills.map(function(fill, index){
            return (<Fill fill={fill} key={'fill'+index} prescription={_.find(prescriptions, {id:fill.prescription_id})} />)

          })}
          
          </ListGroup>
        </Panel>
      </div>
    );
  }
}
/** @const {Object} propTypes definition */
HelloWorld.propTypes = {
  serverTimestamp: React.PropTypes.number,
  onFetchServerTimestamp: React.PropTypes.func.isRequired,
};




