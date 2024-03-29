'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_date: {
        type: Sequelize.DATE
      },
      event_time: {
        type: Sequelize.DATE
      },
      event_venue: {
        type: Sequelize.STRING
      },
      event_address: {
        type: Sequelize.STRING
      },
      event_city: {
        type: Sequelize.STRING
      },
      event_state: {
        type: Sequelize.STRING
      },
      event_zip: {
        type: Sequelize.INTEGER
      },
      event_contact_phone: {
        type: Sequelize.STRING
      },
      event_contact_email: {
        type: Sequelize.STRING
      },
      event_description: {
        type: Sequelize.STRING
      },
      event_website: {
        type: Sequelize.STRING
      },
      event_flyer: {
        type: Sequelize.STRING
      },
      online_price: {
        type: Sequelize.INTEGER
      },
      door_price: {
        type: Sequelize.INTEGER
      },
      ticket_sales_start: {
        type: Sequelize.DATE
      },
      ticket_sales_end: {
        type: Sequelize.DATE
      },
      ticket_allotment: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.FLOAT
      },
      dob: {
        type: Sequelize.STRING
      },      
      revenue: {
        type: Sequelize.FLOAT
      },
      income: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },       
      ethnicity: {
        type: Sequelize.STRING
      }, 
      religion: {
        type: Sequelize.STRING
      },                        
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Events');
  }
};