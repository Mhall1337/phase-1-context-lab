/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


let employeeRecord;

function createEmployeeRecord(testEmployee){
  let employeeRecord = {
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}
createEmployeeRecord(testEmployee)

function createEmployeeRecords(employeeArr){
   return  employeeArr.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp){
     this.timeInEvents.push({
            type: 'TimeIn',
            hour: parseInt(dateStamp.slice(-4)),
            date: dateStamp.slice(0,10)
    })
    return this
}

function createTimeOutEvent(dateStamp){
     this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0,10)
    })
    return this
}

function hoursWorkedOnDate(formDate){
    let timeOut = this.timeOutEvents.find(element => element.date === formDate)
    let timeIn = this.timeInEvents.find(element => element.date === formDate)
   return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
 return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, name){
   return srcArray.find(element => element.firstName === name)
}

function calculatePayroll(array){
    let total = 0
    for(let obj of array){
      total +=  allWagesFor.call(obj)
   }
   return total
}