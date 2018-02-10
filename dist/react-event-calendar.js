(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactEventCalender"] = factory(require("react"));
	else
		root["ReactEventCalender"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _calendarBase = __webpack_require__(2);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _CalendarDay = __webpack_require__(14);
	
	var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
	
	var _CalendarEvent = __webpack_require__(15);
	
	var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
	
	var _CalendarTitle = __webpack_require__(16);
	
	var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventCalendar = function (_React$Component) {
	    _inherits(EventCalendar, _React$Component);
	
	    function EventCalendar(props) {
	        _classCallCheck(this, EventCalendar);
	
	        var _this = _possibleConstructorReturn(this, (EventCalendar.__proto__ || Object.getPrototypeOf(EventCalendar)).call(this, props));
	
	        _this._eventTargets = {};
	
	        _this.state = {
	            today: _this.getToday()
	        };
	
	        _this.calendar = new _calendarBase.Calendar({ siblingMonths: true });
	
	        // Bind methods
	        _this.getCalendarDays = _this.getCalendarDays.bind(_this);
	        _this.getDaysWithEvents = _this.getDaysWithEvents.bind(_this);
	        _this.getEventMeta = _this.getEventMeta.bind(_this);
	        _this.getToday = _this.getToday.bind(_this);
	
	        return _this;
	    }
	
	    _createClass(EventCalendar, [{
	        key: 'getToday',
	        value: function getToday() {
	            var today = new Date();
	            return {
	                day: today.getDate(),
	                month: today.getMonth(),
	                year: today.getFullYear()
	            };
	        }
	    }, {
	        key: 'getCalendarDays',
	        value: function getCalendarDays() {
	            var _this2 = this;
	
	            return this.calendar.getCalendar(this.props.year, this.props.month).map(function (day) {
	                day.eventSlots = Array(_this2.props.maxEventSlots).fill(false);
	                return day;
	            });
	        }
	    }, {
	        key: 'getEventMeta',
	        value: function getEventMeta(days, eventStart, eventEnd) {
	            var eventStartInView = this.calendar.isDateSelected(eventStart);
	            var eventEndInView = this.calendar.isDateSelected(eventEnd);
	            var firstDayOfMonth = days[0];
	            var lastDayOfMonth = days[days.length - 1];
	
	            var eventMeta = {
	                // Asserts Event is visible in this month view
	                isVisibleInView: false,
	                visibleEventLength: days.length,
	                // Returns the index (interval from first visible day) of [...days] of event's first "visible" day
	                firstVisibleDayIndex: eventStartInView ? _calendarBase.Calendar.interval(firstDayOfMonth, eventStart) - 1 : 0
	            };
	
	            // Asserts Event is visible in this month view
	            if (eventStartInView || eventEndInView) {
	                // Asserts event's first or last day is visible in this month view
	                eventMeta.isVisibleInView = true;
	            } else if (eventStart.month < this.props.month && eventEnd.month > this.props.month) {
	                // Asserts at least part of month is
	                eventMeta.isVisibleInView = true;
	            }
	
	            // Determine the visible length of the event during the month
	            if (eventStartInView && eventEndInView) {
	                eventMeta.visibleEventLength = _calendarBase.Calendar.interval(eventStart, eventEnd);
	            } else if (!eventStartInView && eventEndInView) {
	                eventMeta.visibleEventLength = _calendarBase.Calendar.interval(firstDayOfMonth, eventEnd);
	            } else if (eventStartInView && !eventEndInView) {
	                eventMeta.visibleEventLength = _calendarBase.Calendar.interval(eventStart, lastDayOfMonth);
	            }
	
	            return eventMeta;
	        }
	    }, {
	        key: 'getDaysWithEvents',
	        value: function getDaysWithEvents() {
	            var _this3 = this;
	
	            // Get all the days in this months calendar view
	            // Sibling Months included
	            var days = this.getCalendarDays();
	
	            // Set Range Limits on calendar
	            this.calendar.setStartDate(days[0]);
	            this.calendar.setEndDate(days[days.length - 1]);
	
	            // Iterate over each of the supplied events
	            this.props.events.forEach(function (eventItem) {
	
	                var eventStart = _this3.getCalendarDayObject(eventItem.start);
	                var eventEnd = _this3.getCalendarDayObject(eventItem.end);
	                var eventMeta = _this3.getEventMeta(days, eventStart, eventEnd);
	
	                if (eventMeta.isVisibleInView) {
	                    var eventLength = eventMeta.visibleEventLength;
	                    var eventSlotIndex = days[eventMeta.firstVisibleDayIndex].eventSlots.indexOf(false);
	                    var dayIndex = 0;
	
	                    // For each day in the event
	                    while (dayIndex < eventLength) {
	                        // Clone the event object so we acn add day specfic data
	                        var eventData = Object.assign({}, eventItem);
	
	                        if (dayIndex === 0) {
	                            // Flag first day of event
	                            eventData.isFirstDay = true;
	                        }
	
	                        if (dayIndex === eventLength - 1) {
	                            // Flag last day of event
	                            eventData.isLastDay = true;
	                        }
	
	                        if (!eventData.isFirstDay || !eventData.isLastDay) {
	                            // Flag between day of event
	                            eventData.isBetweenDay = true;
	                        }
	
	                        // Apply Event Data to the correct slot for that day
	                        days[eventMeta.firstVisibleDayIndex + dayIndex].eventSlots[eventSlotIndex] = eventData;
	
	                        // Move to next day of event
	                        dayIndex++;
	                    }
	                }
	            });
	
	            return days;
	        }
	    }, {
	        key: 'getCalendarDayObject',
	        value: function getCalendarDayObject(date) {
	            var dateArray = date.split('-');
	            return {
	                year: dateArray[0],
	                // Subtract 1 from month to allow for human declared months
	                month: dateArray[1] - 1,
	                day: dateArray[2]
	            };
	        }
	    }, {
	        key: 'getLastIndexOfEvent',
	        value: function getLastIndexOfEvent(slots) {
	
	            var lastIndexOfEvent = slots.map(function (slot, index) {
	                return slot !== false ? index : false;
	            }).filter(function (element) {
	                return element;
	            }).pop();
	
	            return lastIndexOfEvent < 3 || lastIndexOfEvent === undefined ? 2 : lastIndexOfEvent;
	        }
	    }, {
	        key: 'getSerializedDay',
	        value: function getSerializedDay(day) {
	            return [day.weekDay, day.day, day.month, day.year].join('');
	        }
	    }, {
	        key: 'renderDaysOfTheWeek',
	        value: function renderDaysOfTheWeek() {
	            return this.props.daysOfTheWeek.map(function (title, index) {
	                return _react2.default.createElement(_CalendarTitle2.default, {
	                    key: 'title_' + index,
	                    title: title
	                });
	            });
	        }
	    }, {
	        key: 'renderEvents',
	        value: function renderEvents(day) {
	            var _this4 = this;
	
	            // Trim excess slots
	            var eventSlots = day.eventSlots.slice(0, this.getLastIndexOfEvent(day.eventSlots) + 1);
	
	            return eventSlots.map(function (eventData, index) {
	                return _react2.default.createElement(_CalendarEvent2.default, {
	                    key: 'event_' + index + _this4.getSerializedDay(day),
	                    day: day,
	                    eventData: eventData,
	                    onClick: _this4.props.onEventClick,
	                    onMouseOut: _this4.props.onEventMouseOut,
	                    onMouseOver: _this4.props.onEventMouseOver,
	                    wrapTitle: _this4.props.wrapTitle
	                });
	            });
	        }
	    }, {
	        key: 'renderCalendarDays',
	        value: function renderCalendarDays() {
	            var _this5 = this;
	
	            return this.getDaysWithEvents().map(function (day, index) {
	                var isToday = _calendarBase.Calendar.interval(day, _this5.state.today) === 1;
	                var events = _this5.renderEvents(day);
	
	                return _react2.default.createElement(_CalendarDay2.default, {
	                    key: 'day_' + _this5.getSerializedDay(day),
	                    day: day,
	                    events: events,
	                    isToday: isToday,
	                    onClick: _this5.props.onDayClick
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'flexContainer' },
	                this.renderDaysOfTheWeek(),
	                this.renderCalendarDays()
	            );
	        }
	    }]);
	
	    return EventCalendar;
	}(_react2.default.Component);
	
	EventCalendar.propTypes = {
	    daysOfTheWeek: _propTypes2.default.array,
	    events: _propTypes2.default.array,
	    maxEventSlots: _propTypes2.default.number,
	    month: _propTypes2.default.number.isRequired,
	    onEventClick: _propTypes2.default.func,
	    onEventMouseOut: _propTypes2.default.func,
	    onEventMouseOver: _propTypes2.default.func,
	    onDayClick: _propTypes2.default.func,
	    wrapTitle: _propTypes2.default.bool,
	    year: _propTypes2.default.number.isRequired
	
	};
	
	EventCalendar.defaultProps = {
	    daysOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	    events: [],
	    wrapTitle: true,
	    maxEventSlots: 10
	};
	
	exports.default = EventCalendar;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Calendar constructor
	 *
	 * @param   {Object}  options               Calendar options
	 *   @param {Object}  options.startDate     Date object indicating the selected start date
	 *   @param {Object}  options.endDate       Date object indicating the selected end date
	 *   @param {Boolean} options.siblingMonths Calculate dates from sibling months (before and after the current month, based on weekStart)
	 *   @param {Boolean} options.weekNumbers   Caclulate the week days
	 *   @param {Number}  options.weekStart     Day of the week to start the calendar, respects `Date.prototype.getDay` (defaults to `0`, Sunday)
	 */
	function Calendar (options) {
		options = options || {};
	
		this.startDate = options.startDate;
		this.endDate = options.endDate;
		this.siblingMonths = options.siblingMonths;
		this.weekNumbers = options.weekNumbers;
		this.weekStart = options.weekStart;
	
		if (this.weekStart === undefined) {
			this.weekStart = 0;
		}
	
		this.date = new Date(1986, 9, 14, 0, 0, 0);
	}
	
	/**
	 * Calculate a calendar month
	 *
	 * @param  {Number} year  Year
	 * @param  {Number} month Month [0-11]
	 * @return {Array}        Calendar days
	 */
	Calendar.prototype.getCalendar = function (year, month) {
		this.date.setUTCFullYear(year);
		this.date.setUTCMonth(month);
		this.date.setUTCDate(1);
	
		year = this.date.getUTCFullYear();
		month = this.date.getUTCMonth();
	
		var calendar = [],
			firstDay = this.date.getUTCDay(),
	
			firstDate = - (((7 - this.weekStart) + firstDay) % 7),
			lastDate = Calendar.daysInMonth(year, month),
			lastDay = ((lastDate - firstDate) % 7),
			lastDatePreviousMonth = Calendar.daysInMonth(year, month - 1),
			i = firstDate,
			max = (lastDate - i) + (lastDay != 0 ? 7 - lastDay : 0) + firstDate,
			currentDay,
			currentDate,
			currentDateObject,
			currentWeekNumber = null,
			otherMonth,
			otherYear;
	
		while (i < max) {
			currentDate = i + 1;
			currentDay = ((i < 1 ? 7 + i : i) + firstDay) % 7;
			if (currentDate < 1 || currentDate > lastDate) {
				if (this.siblingMonths) {
					if (currentDate < 1) {
						otherMonth = month - 1;
						otherYear = year;
						if (otherMonth < 0) {
							otherMonth = 11;
							otherYear --;
						}
						currentDate = lastDatePreviousMonth + currentDate;
					}
					else if (currentDate > lastDate) {
						otherMonth = month + 1;
						otherYear = year;
						if (otherMonth > 11) {
							otherMonth = 0;
							otherYear ++;
						}
						currentDate = i - lastDate + 1;
					}
					currentDateObject = {
						day: currentDate,
						weekDay: currentDay,
						month: otherMonth,
						year: otherYear,
						siblingMonth: true
					};
				}
				else {
					currentDateObject = false;
				}
			}
			else {
				currentDateObject = {
					day: currentDate,
					weekDay: currentDay,
					month: month,
					year: year
				};
			}
	
			if (currentDateObject && this.weekNumbers) {
				if (currentWeekNumber === null) {
					currentWeekNumber = Calendar.calculateWeekNumber(currentDateObject);
				}
				else if (currentDay == 1 && currentWeekNumber == 52) {
					currentWeekNumber = 1;
				}
				else if (currentDay == 1) {
					currentWeekNumber ++;
				}
				currentDateObject.weekNumber = currentWeekNumber;
			}
	
			if (currentDateObject && this.startDate) {
				currentDateObject.selected = this.isDateSelected(currentDateObject);
			}
	
			calendar.push(currentDateObject);
			i ++;
		}
	
		return calendar;
	};
	
	/**
	 * Checks if a date is selected
	 *
	 * @param  {Object}  date Date object
	 * @return {Boolean}      Selected status of the date
	 */
	Calendar.prototype.isDateSelected = function (date) {
		if (date.year == this.startDate.year && date.month == this.startDate.month && date.day == this.startDate.day) {
			return true;
		}
		else if (this.endDate) {
			if (date.year == this.startDate.year && date.month == this.startDate.month && date.day < this.startDate.day) {
				return false;
			}
			else if (date.year == this.endDate.year && date.month == this.endDate.month && date.day > this.endDate.day) {
				return false;
			}
			else if (date.year == this.startDate.year && date.month < this.startDate.month) {
				return false;
			}
			else if (date.year == this.endDate.year && date.month > this.endDate.month) {
				return false;
			}
			else if (date.year < this.startDate.year) {
				return false;
			}
			else if (date.year > this.endDate.year) {
				return false;
			}
			return true;
		}
		return false;
	};
	
	/**
	 * Sets the selected period start
	 *
	 * @param {Object} date Date object
	 */
	Calendar.prototype.setStartDate = function (date) {
		this.startDate = date;
	};
	
	/**
	 * Sets the selected period end
	 *
	 * @param {Object} date Date object
	 */
	Calendar.prototype.setEndDate = function (date) {
		this.endDate = date;
	};
	
	/**
	 * Sets one selected date
	 *
	 * @param {Object} date Date object
	 */
	Calendar.prototype.setDate = Calendar.prototype.setStartDate;
	
	/**
	 * Calculates the difference between two dates (date1 - date2), in days
	 *
	 * @param  {Object} date1 Date object
	 * @param  {Object} date2 Date object
	 * @return {Number}       Days between the dates
	 */
	Calendar.diff = function (date1, date2) {
		var oDate1 = new Date(1986, 9, 14, 0, 0, 0), oDate2 = new Date(1986, 9, 14, 0, 0, 0);
	
		oDate1.setUTCFullYear(date1.year);
		oDate1.setUTCMonth(date1.month);
		oDate1.setUTCDate(date1.day);
	
		oDate2.setUTCFullYear(date2.year);
		oDate2.setUTCMonth(date2.month);
		oDate2.setUTCDate(date2.day);
	
		return Math.ceil((oDate1.getTime() - oDate2.getTime()) / 86400000);
	};
	
	/**
	 * Calculates the interval between two dates
	 *
	 * @param  {Object} date1 Date object
	 * @param  {Object} date2 Date object
	 * @return {Number}       Number of days
	 */
	Calendar.interval = function (date1, date2) {
		return Math.abs(Calendar.diff(date1, date2)) + 1;
	};
	
	/**
	 * Calculates the number of days in a month
	 *
	 * @param  {Number} year  Year
	 * @param  {Number} month Month [0-11]
	 * @return {Number}       Length of the month
	 */
	Calendar.daysInMonth = function (year, month) {
		return new Date(year, month + 1, 0).getDate();
	};
	
	/**
	 * Calculates if a given year is a leap year
	 *
	 * @param  {Number}  year Year
	 * @return {Boolean}      Leap year or not
	 */
	Calendar.isLeapYear = function (year) {
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	}
	
	/**
	 * Calculates the week number for a given date
	 *
	 * @param  {Object} date Date object
	 * @return {Number}      Week number
	 */
	// Adapted from http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
	Calendar.calculateWeekNumber = function (date) {
		// Creates the requested date
		var current = new Date(1986, 9, 14, 0, 0, 0);
		current.setUTCFullYear(date.year);
		current.setUTCMonth(date.month);
		current.setUTCDate(date.day);
	
		// Create a copy of the object
		var target = new Date(current.valueOf());
	
		// ISO week date weeks start on monday so correct the day number
		var dayNr = (current.getUTCDay() + 6) % 7;
	
		// ISO 8601 states that week 1 is the week with the first thursday of that
		// year. Set the target date to the thursday in the target week.
		target.setUTCDate(target.getUTCDate() - dayNr + 3);
	
		// Store the millisecond value of the target date
		var firstThursday = target.valueOf();
	
		// Set the target to the first thursday of the year
	
		// First set the target to january first
		target.setUTCMonth(0, 1);
	
		// Not a thursday? Correct the date to the next thursday
		if (target.getUTCDay() != 4) {
			target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
		}
	
		// The weeknumber is the number of weeks between the  first thursday of the
		// year and the thursday in the target week.
		// 604800000 = 7 * 24 * 3600 * 1000
		return 1 + Math.ceil((firstThursday - target) / 604800000);
	}
	
	/**
	 * Exports the Calendar
	 */
	module.exports = { Calendar: Calendar };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(9);
	var assign = __webpack_require__(10);
	
	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(7);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(8);
	  var warning = __webpack_require__(9);
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var ReactPropTypesSecret = __webpack_require__(11);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CalendarDay = function (_React$Component) {
	    _inherits(CalendarDay, _React$Component);
	
	    function CalendarDay() {
	        _classCallCheck(this, CalendarDay);
	
	        return _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).apply(this, arguments));
	    }
	
	    _createClass(CalendarDay, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                day = _props.day,
	                isToday = _props.isToday,
	                events = _props.events,
	                onClick = _props.onClick;
	
	            var dayClasses = (0, _classnames2.default)({
	                'flexColumn': true,
	                'day': true,
	                'inactive': day.siblingMonth,
	                'today': isToday
	            });
	
	            return _react2.default.createElement(
	                'div',
	                {
	                    onClick: onClick.bind(null, this, day),
	                    className: dayClasses },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'inner-grid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'date' },
	                        day.day
	                    ),
	                    events
	                )
	            );
	        }
	    }]);
	
	    return CalendarDay;
	}(_react2.default.Component);
	
	exports.default = CalendarDay;
	
	
	CalendarDay.propTypes = {
	    day: _propTypes2.default.object.isRequired,
	    isToday: _propTypes2.default.bool,
	    events: _propTypes2.default.array,
	    onClick: _propTypes2.default.func
	};
	
	CalendarDay.defaultProps = {
	    onClick: function onClick() {}
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CalendarEvent = function (_React$Component) {
	    _inherits(CalendarEvent, _React$Component);
	
	    function CalendarEvent(props) {
	        _classCallCheck(this, CalendarEvent);
	
	        var _this = _possibleConstructorReturn(this, (CalendarEvent.__proto__ || Object.getPrototypeOf(CalendarEvent)).call(this, props));
	
	        _this.sharedArguments = [null, _this, _this.props.eventData, _this.props.day];
	        // Bind methods
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(CalendarEvent, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.sharedArguments = [null, this, nextProps.eventData, nextProps.day];
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            var _props;
	
	            (_props = this.props).onClick.apply(_props, _toConsumableArray(this.sharedArguments.slice(1)));
	            e.stopPropagation();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$onMouseOut, _props$onMouseOver;
	
	            // Return a placeholder element if there is no event data
	            if (!this.props.eventData) {
	                return _react2.default.createElement('div', { className: 'event-slot' });
	            }
	
	            var showLabel = this.props.eventData.isFirstDay || this.props.day.weekDay === 0 && this.props.wrapTitle;
	            var title = showLabel ? this.props.eventData.title : '';
	
	            var eventClasses = (0, _classnames2.default)({
	                'event-slot': true,
	                'event': true,
	                'event-first-day': this.props.eventData.isFirstDay,
	                'event-last-day': this.props.eventData.isLastDay,
	                'event-has-label': showLabel
	            }, this.props.eventData.eventClasses);
	
	            return _react2.default.createElement(
	                'div',
	                { className: eventClasses,
	                    onClick: this.handleClick,
	                    onMouseOut: (_props$onMouseOut = this.props.onMouseOut).bind.apply(_props$onMouseOut, _toConsumableArray(this.sharedArguments)),
	                    onMouseOver: (_props$onMouseOver = this.props.onMouseOver).bind.apply(_props$onMouseOver, _toConsumableArray(this.sharedArguments))
	                },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'event-title' },
	                    title
	                )
	            );
	        }
	    }]);
	
	    return CalendarEvent;
	}(_react2.default.Component);
	
	CalendarEvent.propTypes = {
	    day: _propTypes2.default.object.isRequired,
	    eventData: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
	    onClick: _propTypes2.default.func,
	    onMouseOut: _propTypes2.default.func,
	    onMouseOver: _propTypes2.default.func,
	    wrapTitle: _propTypes2.default.bool
	};
	
	CalendarEvent.defaultProps = {
	    onClick: function onClick() {},
	    onMouseOut: function onMouseOut() {},
	    onMouseOver: function onMouseOver() {}
	};
	
	exports.default = CalendarEvent;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CalendarTitle = function CalendarTitle(_ref) {
	    var title = _ref.title;
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'flexColumn' },
	        title
	    );
	};
	
	CalendarTitle.propTypes = {
	    title: _propTypes2.default.string.isRequired
	};
	
	exports.default = CalendarTitle;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-event-calendar.js.map