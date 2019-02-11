// JavaScript definitions for Microsoft Dynamics XRM Client API V9.0
// Project: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/developer-guide
// Definitions by: Ziv Ben-Or
// Copyright: Based on TypeScript definision https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/xrm/index.d.ts

!function () {
    const CleanObject = function (obj) { Object.setPrototypeOf(obj, null); return obj };
    const Xrm = CleanObject({
        /**
         * Static xRM object.
         */
        XrmStatic: function () {
            return CleanObject({
                /**
                 * Provides a namespace container for the context, data and ui objects.
                 * @deprecated Deprecated in v9.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                Page: Xrm._Page(),
                /**Provides navigation-related methods.
                 */
                Navigation: Xrm._Navigation(),
                /**
                 * Provides a container for useful functions not directly related to the current page.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility External Link: Xrm.Utility (Client API reference)}
                 */
                Utility: Xrm._Utility(),
                /**
                 * Provides methods to create and manage records in the mobile clients (for phones tablets).
                 * @deprecated Use {@link Xrm.WebApi} instead.
                 */
                Mobile: Xrm.Mobile(),
                /**
                 * Provides a method to display a web page in the side pane of the Customer Engagement form.
                 *
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel External Link: Xrm.Panel}
                 */
                Panel: Xrm.Panel(),
                /**
                 * Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement.
                 *
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi External Link: Xrm.WebApi (Client API reference)}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/use-microsoft-dynamics-365-web-api External Link: Use the Customer Engagement Web API}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/webapi/get-started-web-api-client-side-javascript External Link: Get started with the Customer Engagement Web API (client-side JavaScript)}
                 */
                WebApi: Xrm.WebApi(),
                /**
                 * Provides methods to use native device capabilities of mobile devices.
                 *
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device External Link: Xrm.Device (Client API reference)}
                 */
                Device: Xrm._Device(),
                /**
                 * Provides methods to encode strings.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding External Link: Xrm.Encoding (Client API reference)}
                 */
                Encoding: Xrm.Encoding()
            })
        },
        /**
         * Client Types for {@link ClientContext.getClient clientContext.getClient()}.
         * @type{ "Web" | "Outlook" | "Mobile" | "UnifiedServiceDesk"}
         * @see {@link XrmEnum.Client}
         */
        Client: '',
        /**
         * Client States for {@link ClientContext.getClientState clientContext.getClientState()}.
         * @type {"Online" | "Offline"}
         * @see {@link XrmEnum.ClientState}
         */
        ClientState: '',
        /**
         * Display States for setDisplayState() on {@link Controls.ProcessControl.setDisplayState Processes} and {@link Controls.Tab.setDisplayState Tabs}.
         * Optional types: "collapsed" | "expanded"
         * @see {@link XrmEnum.DisplayState}
         */
        DisplayState: '',
        /**
         * The {@link Entity.save Entity}'s Save Mode
         * Optional types: "saveandclose" | "saveandnew"
         * @see {@link XrmEnum.EntitySaveMode}
         * @see {@link Entity}
         * @see {@link Entity.save}
         */
        EntitySaveMode: '',
        /**
         * Form Notification Levels for {@link Ui.setFormNotification formContext.ui.setFormNotification()}.
         * Optional types: "ERROR" | "INFO" | "WARNING"
         * @see {@link XrmEnum.FormNotificationLevel}
         */
        FormNotificationLevel: '',
        /**
         * Submit Mode for {@link Attributes.Attribute.setSubmitMode} Attributes.Attribute.setSubmitMode().
         * Optional types: "always" | "dirty" | "never"
         * @see {@link XrmEnum.SubmitMode}
         */
        SubmitMode: '',
        /**
         * Themes for {@link GlobalContext.getCurrentTheme globalContext.getCurrentTheme()}.
         * Optional types: "default" | "Office12Blue" | "Office14Silver"
         * @remarks getCurrentTheme() does not work with Dynamics CRM for tablets or in the unified interface.
         * @see {@link XrmEnum.Theme}
         */
        Theme: '',
        /**
         * Interface for the client context.
         */
        ClientContext: function () {
            return CleanObject({
                /**
                 * Returns a value to indicate which client the script is executing in. "Web" | "Outlook" | "Mobile" | "UnifiedServiceDesk"
                 * @returns {string} The client, as either "Web", "Outlook", or "Mobile"
                 */
                getClient: function () { return Xrm.Client },
                /**
                 * Gets client's current state. "Online" | "Offline"
                 * @returns {string} The client state, as either "Online" or "Offline"
                 */
                getClientState: function () { return Xrm.ClientState },
                /**
                 * Use this method to get information about the kind of device the user is using.
                 * @returns {number} Unknown: 1 | Desktop: 2 | Tablet: 3 | Phone: 4
                 */
                getFormFactor: function () { return 0 },
                /**
                 * Returns information whether the server is online or offline.
                 */
                isOffline: function () { return true }
            })
        },
        /**
         * Returns information about the current organization settings.
         */
        OrganizationSettings: function () {
            return CleanObject({
                /**
                 * Returns the ID of the base currency for the current organization.
                 */
                baseCurrencyId: '',
                /**
                 * Returns the default country/region code for phone numbers for the current organization.
                 */
                defaultCountryCode: '',
                /**
                 * Indicates whether the auto-save option is enabled for the current organization.
                 */
                isAutoSaveEnabled: true,
                /**
                 * Returns the preferred language ID for the current organization.
                 */
                languageId: 0,
                /**
                 * Returns the ID of the current organization.
                 */
                organizationId: '',
                /**
                 * Returns the unique name of the current organization.
                 */
                uniqueName: '',
                /**
                 * Indicates whether the Skype protocol is used for the current organization.
                 */
                useSkypeProtocol: true
            })
        },
        /**
         * Interface for the DateFormattingInfo.calendar field
         */
        Calendar: function () {
            return CleanObject({
                MinSupportedDateTime: new Date(),
                MaxSupportedDateTime: new Date(),
                AlgorithmType: 0,
                CalendarType: 0,
                Eras: [],
                TwoDigitYearMax: 0,
                IsReadOnly: true
            })
        },
        /**
         * Interface for UserSettings.dateFormattingInfo response
         */
        DateFormattingInfo: function () {
            return CleanObject({
                amDesignator: '',
                abbreviatedDayNames: [],
                abbreviatedMonthGenitiveNames: [],
                abbreviatedMonthNames: [],
                calendarWeekRule: 0,
                calendar: Xrm.Calendar(),
                dateSeparator: '',
                dayNames: [],
                firstDayOfWeek: 0,
                fullDateTimePattern: '',
                longDatePattern: '',
                longTimePattern: '',
                monthDayPattern: '',
                monthGenitiveNames: [],
                monthNames: [],
                pmDesignator: '',
                shortDatePattern: '',
                shortTimePattern: '',
                shortestDayNames: [],
                sortableDateTimePattern: '',
                timeSeparator: '',
                universalSortableDateTimePattern: '',
                yearMonthPattern: ''
            })
        },
        /**
         * Holds information about the current user settings.
         */
        UserSettings: function () {
            return CleanObject({
                /**
                 * Returns the date formatting information for the current user.
                 */
                dateFormattingInfo: function () { return Xrm.DateFormattingInfo() },
                /**
                 * Returns the ID of the default dashboard for the current user.
                 */
                defaultDashboardId: '',
                /**
                 * Indicates whether guided help is enabled for the current user.
                 */
                isGuidedHelpEnabled: true,
                /**
                 * Indicates whether high contrast is enabled for the current user.
                 */
                isHighContrastEnabled: true,
                /**
                 * Indicates whether the language for the current user is a right-to-left (RTL) language.
                 */
                isRTL: true,
                /**
                 * Returns the language ID for the current user.
                 */
                languageId: 0,
                /**
                 * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with.
                 */
                securityRolePrivileges: [],
                /**
                 * Returns an array of strings that represent the GUID values of each of the security role that the user is associated with or any teams that the user is associated with.
                 */
                securityRoles: [],
                /**
                 * Returns the transaction currency ID for the current user.
                 */
                transactionCurrencyId: '',
                /**
                 * Returns the GUID of the SystemUser.Id value for the current user.
                 */
                userId: '',
                /**
                 * Returns the name of the current user.
                 */
                userName: '',
                /**
                 * Returns the difference in minutes between the local time and Coordinated Universal Time (UTC).
                 */
                getTimeZoneOffsetMinutes: function () { return 0 }
            })
        },
        /**
         * properties of the current business app in Customer Engagement.
         */
        AppProperties: function () {
            return CleanObject({
                appId: '',
                displayName: '',
                uniqueName: '',
                url: '',
                webResourceId: '',
                webResourceName: '',
                welcomePageId: '',
                welcomePageName: ''
            })
        },
        /**
         * Interface for the xRM application context.
         * GetGlobalContext()
         */
        GlobalContext: function () {
            return CleanObject({
                /**
                 * The client's context instance.
                 */
                client: Xrm.ClientContext(),
                /**
                 * Returns information about the current organization settings.
                 */
                organizationSettings: Xrm.OrganizationSettings(),
                /**
                 * Returns information about the current user settings.
                 */
                userSettings: Xrm.UserSettings(),
                /**
                 * Returns information about the advanced configuration settings for the organization.
                 * @param {string} setting Name of the configuration setting. "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"
                 * @see {@link XrmEnum.AdvancedConfigSettingOption}
                 */
                getAdvancedConfigSetting: function (setting) { return 0 },
                /**
                 * Gets client's base URL for Dynamics CRM
                 * @returns {string} The client's base URL
                 * @example
                 * * For Dynamics CRM On-Premises:               http(s)://server/org
                 * * For Dynamics CRM Online:                    https://org.crm.dynamics.com
                 * * For Dynamics CRM for Outlook (Offline):     http://localhost:2525
                 */
                getClientUrl: function () { return '' },
                /**
                 * Returns the name of the current business app in Customer Engagement.
                 */
                getCurrentAppName: function () { return Xrm.Async.PromiseLike() },
                /**
                 * Returns the properties of the current business app in Customer Engagement.
                 */
                getCurrentAppProperties: function () { return Xrm.Async.PromiseLike() },
                /**
                 * Returns the URL of the current business app in Customer Engagement.
                 * @example
                 * * Online        https://**org**.crm.dynamics.com/main.aspx?appid=**GUID**
                 * * OnPrem        https://**server**\/**org**\/main.aspx?appid=**GUID**
                 * @returns {string} A string containing the url of the current business app.
                 */
                getCurrentAppUrl: function () { return '' },
                /**
                 * Gets current styling theme. "default" | "Office12Blue" | "Office14Silver"
                 * @remarks This function does not work with Dynamics CRM for tablets or in the unified interface.
                 * @returns {string} The name of the current theme, as either "default", "Office12Blue", or "Office14Silver"
                 */
                getCurrentTheme: function () { return Xrm.Theme },
                /**
                 * Gets whether automatic save is enabled.
                 * @deprecated Deprecated in v9. Use {@link Xrm.OrganizationSettings.isAutoSaveEnabled globalContext.organizationSettings.isAutoSaveEnabled} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {boolean} true if automatic saving is enabled, otherwise false.
                 */
                getIsAutoSaveEnabled: function () { return true },
                /**
                 * Gets organization's LCID (language code).
                 * @deprecated Deprecated in v9. Use {@link Xrm.OrganizationSettings.languageId globalContext.organizationSettings.languageId} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {number} The organization language code.
                 * @see {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx External Link: Microsoft Locale ID Values}
                 */
                getOrgLcid: function () { return 0 },
                /**
                 * Gets organization's unique name.
                 * @remarks This value can be found on the Developer Resources page within Dynamics CRM.
                 * @deprecated Deprecated in v9. Use {@link Xrm.OrganizationSettings.uniqueName} globalContext.organizationSettings.uniqueName instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {string} The organization's unique name.
                     */
                getOrgUniqueName: function () { return '' },
                /**
                 * Gets query string parameters.
                 * @returns The query string parameters, in a dictionary object representing name and value pairs.
                 * @deprecated Deprecated in v9 (Still applicable in Web Client).
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                getQueryStringParameters: function () { return {} },
                /**
                 * Returns the difference between the local time and Coordinated Universal Time (UTC).
                 * @returns {number} The time zone offset, in minutes.
                 */
                getTimeZoneOffsetMinutes: function () { return 0 },
                /**
                 * Gets user's unique identifier.
                 * @deprecated Deprecated in v9.  Use {@link Xrm.UserSettings.userId globalContext.userSettings.userId} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {string} The user's identifier in Guid format.
                 * @example Example: "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}"
                 */
                getUserId: function () { return '' },
                /**
                 * Gets user's LCID (language code).
                 * @deprecated Deprecated in v9. Use {@link Xrm.UserSettings.languageId globalContext.userSetings.languageId} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {number} The user's language code.
                 * @see {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx External Link: Microsoft Locale ID Values}
                 */
                getUserLcid: function () { return 0 },
                /**
                 * Gets the name of the current user.
                 * @deprecated Deprecated in v9. Use {@link Xrm.UserSettings.userName globalContext.userSettings.userName} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {string} The user's name.
                 */
                getUserName: function () { return '' },
                /**
                 * Gets all user security roles.
                 * @deprecated Deprecated in v9.  Use {@link Xrm.UserSettings.securityRoles globalContext.userSettings.securityRoles} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @returns {string[]} An array of user role identifiers, in Guid format.
                 * @example Example: ["cf4cc7ce-5d51-df11-97e0-00155db232d0"]
                 */
                getUserRoles: function () { return [] },
                /**
                 * Returns the version number of the Dynamics 365 server.
                 * @returns {string} The version number
                 */
                getVersion: function () { return '' },
                /**
                 * Returns a boolean value indicating if the Customer Engagement instance is hosted on- premises or online.
                 */
                isOnPremise: function () { return true },
                /**
                 * Prefixes the current organization's unique name to a string; typically a URL path.
                 * @param {string} sPath Local pathname of the resource.
                 * @returns A path string with the organization name. Format: "/"+ OrgName + sPath
             */
                prependOrgName: function (sPath) { return '' }
            })
        },
        Events: CleanObject({
            /**
             * Interface for save event arguments.
             */
            SaveEventArguments: function () {
                return CleanObject({
                    /**
                     * @summary Gets save mode, as an integer.
                     * @returns The save mode.
                     * @description Gets save mode, as an integer.<BR>
                     * **Values returned are**:
                     * * 1      Save
                     * * 2      Save and Close
                     * * 59     Save and New
                     * * 70     AutoSave (Where enabled; can be used with an OnSave handler to conditionally disable auto-saving)
                     * * 58     Save as Completed (Activities)
                     * * 5      Deactivate
                     * * 6      Reactivate
                     * * 47     Assign (All user- or team-owned entities)
                     * * 7      Send (Email)
                     * * 16     Qualify (Lead)
                     * * 15     Disqualify (Lead)
                     */
                    getSaveMode: function () { return 0 },
                    /**
                     * Returns a boolean value to indicate if the record's save has been prevented.
                     * @returns {boolean} true if saving is prevented, otherwise false.
                     */
                    isDefaultPrevented: function () { return true },
                    /**
                     * Prevents the save operation from being submitted to the server.
                     * All remaining "on save" handlers will continue execution.
                     */
                    preventDefault: function () { return }
                })
            },
            /**
             * Interface for process stage change event arguments.
             */
            StageChangeEventArguments: function () {
                return CleanObject({
                    /**
                     * Gets the direction of the stage change. "Next" | "Previous"
                     * @returns {string} The direction: "next" or "previous"
                         */
                    getDirection: function () { return Xrm.ProcessFlow.StageChangeDirection },
                    /**
                     * Gets the destination stage object
                     * @returns The stage object. For switching between entities, returns the previous stage object
                     */
                    getStage: function () { return Xrm.ProcessFlow.Stage() }
                })
            },
            /**
             * Interface for process stage selected event arguments.
             */
            StageSelectedEventArguments: function () {
                return CleanObject({
                    /**
                     * Gets the selected stage object
                     * @returns The stage object
                     */
                    getStage: function () { return Xrm.ProcessFlow.Stage() }
                })
            },
            /**
             * Interface for the event context.
             * In the API documentation, this is sometimes refferred to as the executionContext.
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/clientapi-execution-context External Link: Client API execution context}
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/execution-context External Link: Execution context (Client API reference)}
             */
            EventContext: function () {
                return CleanObject({
                    /**
                         * Gets the Xrm context.
                         * @returns The Xrm context.
                         */
                    getContext: function () { return Xrm.GlobalContext() },
                    /**
                     * Gets the handler's depth, which is the order in which the handler is executed.
                     * @returns {number} The depth, a 0-based index.
                     */
                    getDepth: function () { return 0 },
                    /**
                     * Gets a reference to the object for which event occurred.
                     * @returns The event source.
                     */
                    getEventSource: function () { return '' },
                    /**
                     * Gets a reference to the currnet form context
                     * @returns The {@link FormContext form context}
                     */
                    getFormContext: function () { return Xrm.FormContext() },
                    /**
                     * @summary Gets the shared variable with the specified key.
                     * @param {string} key The key.
                     * @returns The shared variable.
                     * @desc Gets the shared variable with the specified key.
                     * Used to pass values between handlers of an event.
                     */
                    getSharedVariable: function (key) { return {} },
                    /**
                     * @summary Sets a shared variable.
                     * @param {string} key The key.
                     * @param {any} value The value.
                     * @desc Sets the shared variable with the specified key.
                     * Used to pass values between handlers of an event.
                     */
                    setSharedVariable: function (key, value) { return }
                })
            },
            /**
             * Interface for a save event context
             */
            SaveEventContext: function () {
                return CleanObject(Object.assign(Xrm.Events.EventContext(), {
                    /**
                     * Gets save-event arguments.
                     * @returns The event arguments.  Returns null for all but the "save" event.
                     */
                    getEventArgs: function () { return Xrm.Events.SaveEventArguments() }
                }));
            },
            /**
             * Interface for a process stage change event context
             */
            StageChangeEventContext: function () {
                return CleanObject(Object.assign(Xrm.Events.EventContext(), {
                    /**
                     * Gets process stage change event arguments.
                     * @returns The event arguments.
                     */
                    getEventArgs: function () { return Xrm.Events.StageChangeEventArguments() }
                }));
            },
            StageSelectedEventContext: function () {
                return CleanObject(Object.assign(Xrm.Events.EventContext(), {
                    /**
                     * Gets process stage selected event arguments.
                     * @returns The event arguments.
                     */
                    getEventArgs: function () { return Xrm.Events.StageSelectedEventArguments() }
                }));
            },
            /**
             * Type for a context-sensitive handler.
             * @param {EventContext} context The context.
             */
            ContextSensitiveHandler: function (context) { },
            /**
             * Type for a process status change handler.
             * @param {string} status The process status. "active" | "aborted" | "finished"
             */
            ProcessStatusChangeHandler: function (status) { }
        }),
        /**
         * Defines save options to control how appointment, recurring appointment, or service activity records are processed.
         *
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save External Link: save(Client API reference)}
         */
        SaveOptions: function () {
            return CleanObject({
                /**
                 * Indicates whether to use the Book or Reschedule messages rather than the Create or Update messages.
                 * Applicable to appointment, recurring appointment, or service activity records.
                 */
                UseSchedulingEngine: true
            })
        },
        /**
         * Interface for the formContext.data object.
         * @note NTOE NOTE
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data External Link: formContext.data (Client API reference)}
         */
        Data: function () {
            return CleanObject({
                /**
                 * Asynchronously refreshes data on the form, without reloading the page.
                 * @param {boolean} save true to save the record, after the refresh.
                 * @returns Returns an asynchronous promise.
                 */
                refresh: function (save) { return Xrm.Async.PromiseLike() },
                /**
                 * Asynchronously saves the record  with the option to set callback functions to be executed after the save operation is completed.
                 * @param {[SaveOptions]} saveOptions Options to control how appointment, recurring appointment, or service activity records are processed.
                 * @returns Returns an asynchronous promise.
                 */
                save: function (saveOptions) { return Xrm.Async.PromiseLike() },
                /**
                 * Collection of non-entity data on the form.
                 * Items in this collection are of the same type as the attributes collection, but they are not attributes of the form entity.
                 * In V9 this is only available in the Unified Client
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                 * @see {@link Attributes}
                 */
                attributes: Xrm.Collection.ItemCollection(),
                /**
                 * The record context of the form, {@link Entity formContext.data.entity}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity External Link: formContext.data.entity (Client API reference)}
                 */
                entity: Xrm.Entity(),
                /**
                 * The process API for {@link ProcessFlow.ProcessManager formContext.ui.process}.
                 * @remarks This member may be undefined when Process Flows are not used by the current entity.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process External Link: formContext.data.process (Client API reference)}
                 */
                process: Xrm.ProcessFlow.ProcessManager()
            })
        },
        /**
         * Interface for formContext
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/executioncontext/getformcontext External Link: getFormContext (Client API reference)}
         */
        FormContext: function () {
            return CleanObject({
                /**
                 * Provides methods to work with the form.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data External Link: formContext.data (Client API reference)}
                 */
                data: Xrm.Data(),
                /**
                 * Contains properties and methods to retrieve information about the user interface as well as collections for several subcomponents of the form.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui External Link: formContext.ui (Client API reference)}
                 */
                ui: Xrm.Ui(),
                getAttribute: function (param) {
                    /// <signature>
                    /// <summary>Gets all attributes.</summary>
                    /// <returns type="Attribute[]" />
                    ///</signature>
                    /// <signature>
                    /// <summary>Gets an attribute matching attributeName.</summary>
                    /// <param name="attributeName" type="string">Name of the attribute.</param>
                    /// <returns type="Attribute" />
                    ///</signature>
                    /// <signature>
                    /// <summary>Gets an attribute by index.</summary>
                    /// <param name="index" type="number">The attribute index.</param>
                    /// <returns type="Attribute" />
                    ///</signature>
                    /// <signature>
                    /// <summary>Gets attribute collection by function.</summary>
                    /// <param name="delegateFunction" type="function(Attribute)">A matching delegate function</param>
                    /// <returns type="Attribute[]" />
                    ///</signature>
                    switch (typeof param) {
                        case 'undefined': return [Xrm.Attributes.Attribute()];
                        case 'string': return Xrm.Attributes.Attribute();
                        case 'number': return Xrm.Attributes.Attribute();
                        case 'function': return [Xrm.Attributes.Attribute()];
                    }
                },
                getControl: function (param) {
                    /// <signature>
                    /// <summary>Gets all controls.</summary>
                    /// <returns type="Control[]" />
                    ///</signature>
                    /// <signature>
                    /// <summary>Gets a control matching controlName</summary>
                    /// <param name="controlName" type="string">Name of the control.</param>
                    /// <returns type="Control" />
                    ///</signature>
                    /// <signature>
                    /// <summary>Gets an control by index.</summary>
                    /// <param name="index" type="number">The control index.</param>
                    /// <returns type="Control" />
                    ///</signature>
                    /// <signature>
                    /// <summary>Gets control collection by function.</summary>
                    /// <param name="delegateFunction" type="function(Attribute)">A matching delegate function</param>
                    /// <returns type="Control[]" />
                    ///</signature>
                    switch (typeof param) {
                        case 'undefined': return [Xrm.Controls.Control()];
                        case 'string': return Xrm.Controls.Control();
                        case 'number': return Xrm.Controls.Control();
                        case 'function': return [Xrm.Controls.Control()];
                    }
                }
            })
        },
        /**
         * Interface for the formContext.ui object.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui External Link: formContext.ui (Client API reference)}
         */
        Ui: function () {
            return CleanObject({
                /**
                * Displays a form level notification. Any number of notifications can be displayed and will remain until removed using clearFormNotification.
                * The height of the notification area is limited so each new message will be added to the top.
                * @param {string} message The text of the notification message.
                * @param {string} level The level of the notification which defines how the message will be displayed, such as the icon. "ERROR" | "INFO" | "WARNING"
                * ERROR: Notification will use the system error icon.
                * WARNING: Notification will use the system warning icon.
                * INFO: Notification will use the system info icon.
                * @param {string} uniqueId Unique identifier for the notification which is used with clearFormNotification to remove the notification.
                * @returns true if it succeeds, otherwise false.
                */
                setFormNotification: function (message, level, uniqueId) { return true },
                /**
                 * Clears the form notification described by uniqueId.
                 * @param {string} uniqueId Unique identifier.
                 * @returns True if it succeeds, otherwise false.
                 */
                clearFormNotification: function (uniqueId) { return true },
                /**
                 * Closes the form.
                 */
                close: function () { return },
                /**
                 * Gets form type.
                 * @returns The form type.
                 * @remarks **Values returned are**:
                 * * 0  Undefined
                 * * 1  Create
                 * * 2  Update
                 * * 3  Read Only
                 * * 4  Disabled
                 * * 6  Bulk Edit
                 * * Deprecated values are 5 (Quick Create), and 11 (Read Optimized)
                 */
                getFormType: function () { return 0 },
                /**
                 * Gets view port height.
                 * @returns {number} The view port height, in pixels.
                 * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
                 */
                getViewPortHeight: function () { return 0 },
                /**
                 * Gets view port width.
                 * @returns {number} The view port width, in pixels.
                 * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
                 */
                getViewPortWidth: function () { return 0 },
                /**
                 * Re-evaluates the ribbon's configured EnableRules.
                 * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
                 */
                refreshRibbon: function () { return },
                /**
                 * The business process flow API, used to interact with the business process flow control in a form.
                 */
                process: Xrm.Controls.ProcessControl(),
                /**
                 * A reference to the collection of controls on the form.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                 */
                controls: Xrm.Collection.ItemCollection(Xrm.Controls.Control()),
                /**
                 * The form selector API.
                 * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
                 */
                formSelector: Xrm.Controls.FormSelector(),
                /**
                 * The navigation API.
                 * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
                 */
                navigation: Xrm.Controls.Navigation(),
                /**
                 * A reference to the collection of tabs on the form.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                 */
                tabs: Xrm.Collection.ItemCollection(),
                /**
                 * A collection of all the quick view controls on a form using the new form rendering engine (also called "turbo forms").
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms ExternalLink: formContext.ui.quickForms (Client API reference)}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui External Link: formContext.ui (Client API reference)}
                 */
                quickForms: Xrm.Collection.ItemCollection()
            })
        },
        /**
         * Interface for options used in Xrm.Utility.lookupObjects
         */
        LookupOptions: function () {
            return CleanObject({
                /**
                 * Indicates whether the lookup allows more than one item to be selected.
                 */
                allowMultiSelect: true,
                /**
                 * The default entity type to use.
                 */
                defaultEntityType: '',
                /**
                 * The default view to use.
                 */
                defaultViewId: '',
                /**
                 * The entity types to display.
                 */
                entityTypes: [],
                /**
                 * Indicates whether the lookup control should show the barcode scanner in mobile clients.
                 */
                showBarcodeScanner: true,
                /**
                 * The views to be available in the view picker.Only system views are supported.
                 */
                viewIds: []
            })
        },
        /**
         * Interface for the Xrm.Utility API
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility External Link: Xrm.Utility (Client API reference)}
         */
        _Utility: function () {
            return CleanObject({
                /**
                 * Closes a progress dialog box.
                 */
                closeProgressIndicator: function () { return },
                /**
                 * Returns the valid state transitions for the specified entity type and state code.
                 * TODO: No info on the return type is available
                 * @param {string} entityName    The logical name of the entity.
                 * @param {number} stateCode     The state code to find out the allowed status transition values.
                 */
                getAllowedStatusTransitions: function (entityName, stateCode) { return Xrm.Async.PromiseLike() },
                /**
                 * Returns the entity metadata for the specified entity.
                 * @param {string} entityName The logical name of the entity.
                 * @param {string[]} attributes The attributes to get metadata for.
                 */
                getEntityMetadata: function (entityName, attributes) { return Xrm.Async.PromiseLike() },
                /**
                 * The method provides access to the global context without going through the form context.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext External Link: getGlobalContext (Client API reference)}
                 */
                getGlobalContext: function () { return Xrm.GlobalContext() },
                /**
                 * Returns the localized string for a given key associated with the specified web resource.
                 * @param {string} webResourceName The name of the web resource.
                 * @param {string} key The key for the localized string.
                 * @returns A localized string.
                 */
                getResourceString: function (webResourceName, key) { return '' },
                /**
                 * Invokes an action based on the specified parameters
                 * @param {string} name Name of the process action to invoke.
                 * @param {Collection.Dictionary} parameters An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction External Link: invokeProcessAction (Client API reference)}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/customize/actions External Link: Actions overview}
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/create-own-actions External Link: Create your own actions}
                 */
                invokeProcessAction: function (name, parameters) { return Xrm.Async.PromiseLike() },
                /**
                 * Opens a lookup control to select one or more items.
                 * @param {lookupOptions} lookupOptions Defines the options for opening the lookup dialog
                 */
                lookupObjects: function (lookupOptions) { return Xrm.Async.PromiseLike() },
                /**
                 * Refreshes the parent grid containing the specified record.
                 * @param {LookupValue} lookupOptions: The lookup value of the parent object to refresh.
                 */
                refreshParentGrid: function (lookupOptions) { return },
                /**
                 * Displays a progress dialog with the specified message.
                 * Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call.
                 * @param {string} message The message to be displayed in the progress dialog.
                 */
                showProgressIndicator: function (message) { return },
                /**
                 * Displays an alert dialog, with an "OK" button.
                 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openAlertDialog} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @param {string} message The message.
                 * @param {function} onCloseCallback The "OK" callback.
                 */
                alertDialog: function (message, onCloseCallback) { return },
                /**
                 * Displays a confirmation dialog, with "OK" and "Cancel" buttons.
                 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openConfirmDialog} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @param {string} message The message.
                 * @param {function} yesCloseCallback The "OK" callback.
                 * @param {function} noCloseCallback The "Cancel" callback.
                 */
                confirmDialog: function (message, yesCloseCallback, noCloseCallback) { return },
                /**
                 * Query if 'entityType' is an Activity entity.
                 * @deprecated Deprecated in v9. Use {@link Xrm.Utility.getEntityMetadata  Xrm.Utility.getEntityMetadata(entityName, ["IsActivity"])} instead.
                 * @remarks The isActivityType method is synchronous so it was suitable for ribbon rules.
                 * However, the replacement method, getEntityMetadata, is asynchronous, and is not suitable for ribbon rules.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @param {string} entityType Type of the entity.
                 * @returns true if the entity is an Activity, false if not.
                 */
                isActivityType: function (entityType) { return true },
                /**
                 * Opens quick create.
                 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openForm} instead with the option {useQuickCreateForm:true}.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @param {string} entityLogicalName  The logical name of the entity to create.
                 * @param {LookupValue} createFromEntity (Optional) Designates a record that will provide default values based on mapped attribute values.
                 * @param {Utility.OpenParameters} parameters (Optional) A dictionary object that passes extra query string parameters to the form. Invalid query string parameters will cause an error.
                 * @returns Returns an asynchronous promise.
                 */
                openQuickCreate: function (entityLogicalName, createFromEntity, parameters) { return Xrm.Async.PromiseLike() },
                /**
                 * Opens an entity form.
                 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openForm} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @param {string} name The entity's logical name.
                 * @param {string} id (Optional) The unique identifier for the record.
                 * @param {Utility.FormOpenParameters} parameters (Optional) A dictionary object that passes extra query string parameters to the form.
                 * @param {Utility.WindowOptions} windowOptions (Optional) Options for controlling the window.
                 */
                openEntityForm: function (name, id, parameters, windowOptions) { return },
                /**
                 * Opens an HTML Web Resource in a new browser window.
                 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openWebResource} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 * @param {string} webResourceName Name of the HTML web resource. Can be used to pass URL parameters.  See Remarks.
                 * @param {string} webResourceData (Optional) Data to pass into the Web Resource's data parameter. It is advised to use encodeURIcomponent() to encode the value.
                 * @param {number} width (Optional) The width of the new window.
                 * @param {number} height (Optional) The height of the new window.
                 * @returns A Window reference, containing the opened Web Resource.
                 * @remarks This function will not work with Microsoft Dynamics CRM for tablets.<BR>
                 * **Valid WebResource URL Parameters**:
                 * * typename
                 * * type
                 * * id
                 * * orgname
                 * * userlcid
                 * * data (identical to this method's webResourceData parameter)
                 * * formid
                 */
                openWebResource: function (webResourceName, webResourceData, width, height) { return Window }
            })
        },
        /**
         * Interface for methods to create and manage records in the mobile clients (for phones tablets).
         */
        Mobile: function () {
            return CleanObject({
                /**
                 * Provides methods to create and manage records in the mobile clients while working in the offline mode.
                 * @see {@link https://msdn.microsoft.com/en-us/library/mt787123.aspx External Link: Xrm.Mobile.offline (client-side reference)}
                 * @deprecated Use {@link Xrm.WebApi.offline} instead.  Xrm.WebApi.offline is implemented differently than Xrm.Mobile.offline
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                offline: Xrm.MobileOffline()
            })
        },
        /**
         * Interface for the Mobile.offline methods to create and manage records in the mobile clients while working in the offline mode.
         * @deprecated Use {@link Xrm.WebApi.offline} instead.  Xrm.WebApi.offline is implemented differently than Xrm.Mobile.offline
         * @see {@link https://msdn.microsoft.com/en-us/library/mt787123.aspx External Link: Xrm.Mobile.offline (client-side reference)}
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
         */
        MobileOffline: function () {
            return CleanObject({
                /**
                 * Returns whether an entity is offline enabled.
                 * @param {string} entityType The logical name of the entity.
                 * @returns True if the entity is offline enabled; otherwise False.
                 * @deprecated Use {@link Xrm.WebApi.isAvailableOffline} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                     */
                isOfflineEnabled: function (entityType) { return true },
                /**
                 * Creates an entity record in mobile clients while working in the offline mode.
                 * @param {string} entityType The logical name of the entity.
                 * @param {object} data A dictionary object containing key : value pairs for the record to create.
                 * @returns Returns an asynchronous promise.
                 * @remarks  You cannot create intersect and activity party entities.<BR>
                 *           Only the following attribute types are supported in offline mode:<BR>
                 *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
                 *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
                 *             Status, UniqueIdentifier
                 * @deprecated Use {@link Xrm.WebApi.createRecord} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                createRecord: function (entityType, data) { return Xrm.Async.PromiseLike() },
                /**
                 * Retrieves an entity record in mobile clients while working in the offline mode.
                 *
                 * @param {string} entityType The logical name of the entity.
                 * @param {string} id GUID of the record to retrieve.
                 * @param {string} options (Optional) OData system query options to retrieve your data. Supports $select and $expand
                 * @example <caption>Example options</caption>
                 * options: ?$select=name&$expand=primarycontactid($select=contactid,fullname)
                 * @returns Returns an asynchronous promise.
                 * @remarks  Only $select option can be specified within $expand.<BR>
                 *           Only the following attribute types are supported in offline mode:<BR>
                 *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
                 *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
                 *             Status, UniqueIdentifier
                 * @deprecated Use {@link Xrm.WebApi.retrieveRecord} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                retrieveRecord: function (entityType, id, options) { return Xrm.Async.PromiseLike() },
                /**
                 * Retrieves a collection of entity records in mobile clients while working in the offline mode.
                 *
                 * @param {string} entityType The logical name of the entity.
                 * @param {string} options (Optional) The logical name of the entity
                 * @param {number} maxPageSize (Optional) A positive number to indicates the number of entity records to be returned per page.
                 * * If you do not specify this parameter, the default value is passed as 5000.
                 * * If the number of records being retrieved is more than maxPageSize, an @odata.nextLink property
                 * will be returned, and you can use the value of the @odata.nextLink property with a new GET
                 * request to return next set of records.
                 * @returns Returns an asynchronous promise.
                 * @remarks  A maximum of 5000 related records can be retrieved when using $expand.
                 * * Only $select option can be specified within $expand.
                 * * $skip query option is not supported.
                 * * Only the following attribute types are supported in offline mode:<BR>
                 *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
                 *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
                 *             Status, UniqueIdentifier
                 * @deprecated Use {@link Xrm.WebApi.retrieveMultipleRecords} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                retrieveMultipleRecords: function (entityType, options, maxPageSize) { return Xrm.Async.PromiseLike() },
                /**
                 * Updates an entity record in mobile clients while working in the offline mode.
                 * @param {string} entityType The logical name of the entity.
                 * @param {string} id GUID of the record to update.
                 * @param {object} data A dictionary object containing key : value pairs for the record to update.
                 * @returns Returns an asynchronous promise.
                 * @remarks  You cannot update intersect and activity party entities.<BR>
                 *           Only the following attribute types are supported in offline mode:<BR>
                 *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
                 *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
                 *             Status, UniqueIdentifier
                 * @deprecated Use {@link Xrm.WebApi.updateRecord} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                updateRecord: function (entityType, id, data) { return Xrm.Async.PromiseLike() },
                /**
                 * Deletes an entity record in mobile clients while working in the offline mode.
                 * @param {string} entityType The logical name of the entity.
                 * @param {string} id GUID of the record to delete.
                 * @returns Returns an asynchronous promise.
                 * @remarks  You cannot delete intersect and activity party entities.
                 * @deprecated Use {@link Xrm.WebApi.deleteRecord} instead.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                deleteRecord: function (entityType, id) { return Xrm.Async.PromiseLike() }
            })
        },
        /**
         * Interface for the Xrm.Panel API
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel External Link: Xrm.Panel}
         */
        Panel: function () {
            return CleanObject({
                /**
                 * Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the Customer Engagement web client.
                 * @param {string} url URL of the page to be loaded in the side pane static area.
                 * @param {string} title Title of the side pane static area.
                 * @remarks  This method is only supported for the web client.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel External Link: loadPanel (Client-side reference)}
                 */
                loadPanel: function (url, title) { return }
            })
        },
        /**
         *  A definition module for asynchronous interface declarations.
         */
        Async: CleanObject({
            /**
             * Object passed to ErrorCallbackDelegate.
             */
            ErrorCallbackObject: function () {
                return CleanObject({
                    /**
                     * The error code.
                     */
                    errorCode: 0,
                    /**
                     * An error message describing the issue.
                     */
                    message: ''
                })
            },
            /**
             * Object passed to QuickCreateSuccessCallbackDelegate.
             */
            OpenQuickCreateSuccessCallbackObject: function () {
                return CleanObject({
                    /**
                     * A lookup value which identifies the record which has been created.
                     */
                    savedEntityReference: Xrm.LookupValue()
                })
            },
            /**
             * Object passed to OfflineOperationSuccessCallbackDelegate;
             */
            OfflineOperationSuccessCallbackObject: function () {
                return CleanObject({
                    /**
                     * GUID of the record;
                     */
                    id: '',
                    /**
                     * Logical name of the entity.
                     */
                    logicalName: ''
                })
            },
            /**
             * Object passed to OfflineErrorCallbackDelegate.
             */
            OfflineErrorCallbackObject: function () {
                return CleanObject(Object.assign(Xrm.Async.ErrorCallbackObject(), {
                    /**
                     * An internal error message that might contain additional details about the issue.
                     */
                    debugMessage: ''
                }));
            },
            /**
             * Interface for asynchronous promises. Based on JQuery Promise
             */
            PromiseLike: function () {
                return CleanObject({
                    /**
                     * Attaches callbacks for the resolution and/or rejection of the Promise.
                     * @param {function(any) | PromiseLike} onfulfilled The callback to execute when the Promise is resolved.
                     * @param {function(error) | PromiseLike} onrejected The callback to execute when the Promise is rejected.
                     * @returns A Promise for the completion of which ever callback is executed.
                     */
                    then: function (onFulfilled, onRejected) { return Xrm.Async.PromiseLike() },
                    /**
                     * UNDOCUMENTED (Web Client only) Add handlers to be called when the Deferred object is rejected.
                     */
                    fail: function (onRejected) { return Xrm.Async.PromiseLike() },
                    /**
                     * UNDOCUMENTED (Web Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
                     */
                    always: function (alwaysCallback) { return Xrm.Async.PromiseLike() },
                    /**
                     * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is rejected.
                     */
                    catch: function (onRejected) { return Xrm.Async.PromiseLike() },
                    /**
                     * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
                     */
                    finally: function (finallyCallback) { return Xrm.Async.PromiseLike() }
                })
            }
        }),
        /**
         * A definition module for collection interface declarations.
         */
        Collection: CleanObject({
            /**
             * Called for each item in an array
             * @param {any} item The item.
             * @param {number} index Zero-based index of the item array.
             * @returns true if the item matches, false if it does not.
             */
            MatchingDelegate: function (item, index) { },
            /**
             * Called for each item in an array
             * @param {any} item The item.
             * @param {number} index Zero-based index of the item array.
             */
            IterativeDelegate: function (item, index) { },
            /**
             * Defines collections that are index-able by string
             */
            Dictionary: function () {
                return CleanObject({
                })
            },
            /**
             * Defines item collections that are index-able by string
             */
            StringIndexableItemCollection: [],
            /**
             * Collections are structures to provide access to data that represent an array, but without the ability to modify the data in the array.
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
             */
            ItemCollection: function (item) {
                return CleanObject({
                    /**
                     * Applies an operation to all items in this collection.
                     * @param {function(any item, [number index])} delegate An iterative delegate function
                     */
                    forEach: function (delegate) { item && delegate.call(null, item) },
                    get: function (param) {
                        /// <signature>
                        /// <summary>Gets the item using a delegate matching function.</summary>
                        /// <param name="delegate" type="function">delegate A matching delegate function.</param>
                        /// <returns type="[]" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets the item given by the index.</summary>
                        /// <param name="itemNumber" type="number">The item number to get.</param>
                        /// <returns type="any" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets the item given by the key.</summary>
                        /// <param name="itemName" type="string">The item name to get.</param>
                        /// <returns type="any" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets the entire array of the collection</summary>
                        /// <returns type="[]" />
                        ///</signature>
                        switch (typeof param) {
                            case 'undefined': return [item || {}];
                            case 'string': return item || {};
                            case 'number': return item || {};
                            case 'function': return [item || {}];
                        }
                    },
                    /**
                     * Gets the length of the collection.
                     * @returns {number} The length.
                     */
                    getLength: function () { return 0 }
                })
            }
        }),
        /**
         * Interface for Page context
         * @deprecated Use {@link Xrm.Events.EventContext.getFormContext formContext} instead.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}a
         */
        _Page: function () {
            return CleanObject(Object.assign(Xrm.FormContext(), {
                /**
                 * Provides methods to retrieve information specific to an organization, a user, or parameters passed to a page.
                 * @deprecated Deprecated in v9.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                 */
                context: Xrm.GlobalContext()
            }));
        },
        /**
         * Xrm.Page namespace has been deprecated
         * @deprecated Use {@link Xrm.Events.EventContext.getFormContext formContext} instead.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
         */
        Page: CleanObject({
            /**
             * @deprecated Use {@link Xrm.Controls.AddControlNotificationOptions} instead.
             */
            AddControlNotificationOptions: function () { return CleanObject(Object.assign(Xrm.Controls.AddControlNotificationOptions(), {})) },
            /**
             * Interface to define the actions on a control notification
             * @deprecated Use {@link Xrm.Controls.ControlNotificationAction} instead.
             */
            ControlNotificationAction: function () { return CleanObject(Object.assign(Xrm.Controls.ControlNotificationAction(), {})) },
            /**
             * Interface for an entity's form selector item.
             * @deprecated Use {@link Xrm.Controls.FormItem} instead.
             */
            FormItem: function () { return CleanObject(Object.assign(Xrm.Controls.FormItem(), {})) },
            /**
             * Interface for the form selector API.
             * @deprecated Use {@link Xrm.Controls.FormSelector} instead.
             */
            FormSelector: function () { return CleanObject(Object.assign(Xrm.Controls.FormSelector(), {})) },
            /**
             * Interface for Xrm.Page.ui.navigation.
             * @deprecated Use {@link Xrm.Controls.Navigation} instead.
             */
            Navigation: function () { return CleanObject(Object.assign(Xrm.Controls.Navigation(), {})) },
            /**
             * Interface for a navigation item.
             * @see {@link UiElement}
             * @see {@link UiFocusable}
             * @deprecated Use {@link Xrm.Controls.NavigationItem} instead.
             */
            NavigationItem: function () { return CleanObject(Object.assign(Xrm.Controls.NavigationItem(), {})) },
            /**
             * Constants to use with the addNotification method of form controls
             * @deprecated Use {@link Xrm.Controls.NotificationLevel} instead.
             */
            NotificationLevel: '',
            /**
             * Requirement Level for Xrm.Page.Attribute.getRequiredLevel() and Xrm.Page.Attribute.setRequiredLevel().
             * @deprecated Use {@link Xrm.Attributes.RequirementLevel} instead.
             */
            RequirementLevel: '',
            /**
             * Save Modes for Xrm.Page.Entity.save().
             * @deprecated Use {@link Xrm.EntitySaveMode} instead.
             */
            SaveMode: '',
            /**
             * Status for Xrm.Page.Stage.getStatus().
             * @deprecated Use {@link Xrm.ProcessFlow.StageStatus} instead.
             */
            StageStatus: '',
            /**
             * Status for Xrm.Page.Process.getStatus().
             * @deprecated Use {@link Xrm.ProcessFlow.ProcessStatus} instead
             */
            ProcessStatus: '',
            /**
             * Submit Mode for Xrm.Page.Attribute.getSubmitMode() and Xrm.Page.Attribute.setSubmitMode().
             * @deprecated Use {@link Xrm.SubmitMode} instead.
             */
            SubmitMode: Xrm.SubmitMode,
            /**
             * Control type for Xrm.Page.ui.QuickForm.getControlType().
             * @deprecated Use {@link Xrm.Controls.ControlQuickFormType} instead.
             *
             */
            ControlQuickFormType: Xrm.Controls.ControlQuickFormType,
            /**
             * Control types for Xrm.Page.Control.getControlType().
             * @deprecated Use {@link Xrm.Controls.ControlType} instead.
             */
            ControlType: '',
            /**
             * Date attribute formats for Xrm.Page.Attribute.getFormat(), used by DateAttribute.
             * @deprecated Use {@link Xrm.Attributes.DateAttributeFormat} instead.
             */
            DateAttributeFormat: '',
            /**
             * Integer attribute formats for Xrm.Page.Attribute.getFormat(), used by NumberAttribute.
             * @deprecated Use {@link Xrm.Attributes.IntegerAttributeFormat} instead.
             */
            IntegerAttributeFormat: '',
            /**
             * OptionSet attribute formats for Xrm.Page.Attribute.getFormat(), used by OptionSetAttribute.
             * @deprecated Use {@link Xrm.Attributes.OptiopnSetAttributeFormat} instead.
             */
            OptionSetAttributeFormat: '',
            /**
             * String attribute formats for Xrm.Page.Attribute.getFormat(), used by StringAttribute.
             * @deprecated Use {@link Xrm.Attributes.StringAttributeFormat} instead.
             */
            StringAttributeFormat: '',
            /**
             * Attribute types for Xrm.ui.ProcessMonitor Xrm.Page.Attribute.setDisplayState().
             * @deprecated Use {@link Xrm.Attributes.AttributeType} instead.
             */
            AttributeType: '',
            /**
             * Direction types for a process stage change event
             * @deprecated Use {@link Xrm.ProcessFlow.StageChangeDirection} instead.
             */
            StageChangeDirection: '',
            /**
             * Attribute formats for Xrm.Page.Attribute.getFormat().
             * @deprecated Use {@link Xrm.Attributes.AttributeFormat} instead.
             */
            AttributeFormat: '',
            /**
             * Interface for a CRM Business Process Flow instance.
             * @deprecated Use {@link Xrm.ProcessFlow.Process} instead.
             */
            Process: function () { return CleanObject(Object.assign(Xrm.ProcessFlow.Process(), {})) },
            /**
             * Interface for CRM Business Process Flow stages.
             * @deprecated Use {@link Xrm.ProcessFlow.Stage} instead.
             */
            Stage: function () { return CleanObject(Object.assign(Xrm.ProcessFlow.Stage(), {})) },
            /**
             * Interface for CRM Business Process Flow steps.
             * @deprecated Use {@link Xrm.ProcessFlow.Step} instead.
             */
            Step: function () { return CleanObject(Object.assign(Xrm.ProcessFlow.Step(), {})) },
            /**
             * Interface for the event context.
             * @deprecated Use {@link Xrm.Events.EventContext} instead.
             */
            EventContext: function () { return CleanObject(Object.assign(Xrm.Events.EventContext(), {})) },
            /**
             * Interface for a save event context
             * @deprecated Use {@link Xrm.Events.SaveEventContext} instead.
             */
            SaveEventContext: function () { return CleanObject(Object.assign(Xrm.Events.SaveEventContext(), {})) },
            /**
             * Interface for a process stage change event context
             * @deprecated Use {@link Xrm.Events.StageChangeEventContext} instead.
             */
            StageChangeEventContext: function () { return CleanObject(Object.assign(Xrm.Events.StageChangeEventContext(), {})) },
            /**
             * Interface for a process stage select event context
             * @deprecated  Use {@link Xrm.Events.StageSelectedEventContext} instead.
             */
            StageSelectedEventContext: function () { return CleanObject(Object.assign(Xrm.Events.StageSelectedEventContext(), {})) },
            /**
             * Type for a context-sensitive handler.
             * @param context The context.
             * @deprecated Use {@link Xrm.Events.ContextSensitiveHandler} instead.
             */
            ContextSensitiveHandler: function (context) { },
            /**
             * Type for a process status change handler.
             * @param status The process status.
             * @deprecated Use {@link Xrm.Events.ProcessStatusChangeHandler} instead.
             */
            ProcessStatusChangeHandler: function (status) { },
            /**
             * Interface for UI elements with labels.
             * @deprecated Use {@link Xrm.Controls.UiLabelElement} instead.
             */
            UiLabelElement: function () { return CleanObject(Object.assign(Xrm.Controls.UiLabelElement(), {})) },
            /**
             * Interface for UI elements which can have the visibility value read.
             * @deprecated Use {@link Xrm.Controls.UiCanGetVisibleElement} instead.
             */
            UiCanGetVisibleElement: function () { return CleanObject(Object.assign(Xrm.Controls.UiCanGetVisibleElement(), {})) },
            /**
             * Interface for UI elements which can have the visibility value updated.
             * @deprecated Use {@link Xrm.Controls.UiCanSetVisibleElement} instead.
             */
            UiCanSetVisibleElement: function () { return CleanObject(Object.assign(Xrm.Controls.UiCanSetVisibleElement(), {})) },
            /**
             * Base interface for standard UI elements.
             * @deprecated Use {@link Xrm.Controls.UiStandardElement} instead.
             */
            UiStandardElement: function () { return CleanObject(Object.assign(Xrm.Controls.UiStandardElement(), {})) },
            /**
             * Interface for focusable UI elements.
             * @deprecated Use {@link Xrm.Controls.UiFocusable} instead.
             */
            UiFocusable: function () { return CleanObject(Object.assign(Xrm.Controls.UiFocusable(), {})) },
            /**
             * Interface for controls which methods provide immediate feedback or take actions as user types in a control.
             * Contains methods which can be used to perform data validations in a control even before the user commits (saves) the value in a form.
             * @deprecated Use {@link Xrm.Controls.UiKeyPressable} instead.
             */
            UiKeyPressable: function () { return CleanObject(Object.assign(Xrm.Controls.UiKeyPressable(), {})) },
            /**
             * Interface for Result value of AutoCompleteResultSet
             * @deprecated Use {@link Xrm.Controls.AutoCompleteResult} instead.
             */
            AutoCompleteResult: function () { return CleanObject(Object.assign(Xrm.Controls.AutoCompleteResult(), {})) },
            /**
             * Interface for command of AutoCompleteResultSet.  This is displayed at the bottom of the auto complete view
             * @deprecated Use {@link Xrm.Controls.AutoCompleteCommand} instead.
             */
            AutoCompleteCommand: function () { return CleanObject(Object.assign(Xrm.Controls.AutoCompleteCommand(), {})) },
            /**
             * Interface for showAutoComplete argument
             * @deprecated Use {@link Xrm.Controls.AutoCompleteResultSet} instead.
             */
            AutoCompleteResultSet: function () { return CleanObject(Object.assign(Xrm.Controls.AutoCompleteResultSet(), {})) },
            /**
             * Interface for a Lookup value.
             * @deprecated Use {@link Xrm.LookupValue} instead.
             */
            LookupValue: function () { return CleanObject(Object.assign(Xrm.LookupValue(), {})) },
            /**
             * Interface for an OptionSet value.
             * @deprecated Use {@link Xrm.OptionSetValue} instead.
             */
            OptionSetValue: function () { return CleanObject(Object.assign(Xrm.OptionSetValue(), {})) },
            /**
             * Interface for a privilege.
             * @deprecated Use {@link Xrm.Privilege} instead.
             */
            Privilege: function () { return CleanObject(Object.assign(Xrm.Privilege(), {})) },
            /**
             * Interface for an Entity attribute.
             * @deprecated Use {@link Xrm.Attributes.Attribute} instead.
             */
            Attribute: function () { return CleanObject(Object.assign(Xrm.Attributes.Attribute(), {})) },
            /**
             * Interface for a Number attribute.
             * @see {@link Attribute}
             * @deprecated Use {@link Xrm.Attributes.NumberAttribute} instead.
             */
            NumberAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.NumberAttribute(), {})) },
            /**
             * Interface for a String attribute.
             * @see {@link Attribute}
             * @deprecated Use {@link Xrm.Attributes.StringAttribute} instead.
             */
            StringAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.StringAttribute(), {})) },
            /**
             * Common interface for enumeration attributes (OptionSet and Boolean).
             * @see {@link Attribute}
             * @deprecated Use {@link Xrm.Attributes.EnumAttribute} instead.
             */
            EnumAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.EnumAttribute(), {})) },
            /**
             * Interface for a Boolean attribute.
             * @see {@link EnumAttribute}
             * @deprecated Use {@link Xrm.Attributes.BooleanAttribute} instead.
             */
            BooleanAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.BooleanAttribute(), {})) },
            /**
             * Interface for a Date attribute.
             * @see {@link Attribute}
             * @deprecated Use {@link Xrm.Attributes.DateAttribute} instead.
             */
            DateAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.DateAttribute(), {})) },
            /**
             * Interface an OptionSet attribute.
             * @see {@link EnumAttribute}
             * @deprecated Use {@link Xrm.Attributes.OptionSetAttribute} instead.
             */
            OptionSetAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.OptionSetAttribute(), {})) },
            /**
             * Interface a Lookup attribute.
             * @see {@link Attribute}
             * @deprecated Use {@link Xrm.Attributes.LookupAttribute} instead.
             */
            LookupAttribute: function () { return CleanObject(Object.assign(Xrm.Attributes.LookupAttribute(), {})) },
            /**
             * Interface for the form's record context, Xrm.Page.data.entity
             * @deprecated Use {@link Xrm.Entity} instead.
             */
            Entity: function () { return CleanObject(Object.assign(Xrm.Entity(), {})) },
            /**
             * Interface for save event arguments.
             * @deprecated Use {@link Xrm.Events.SaveEventContext} instead.
             */
            SaveEventArguments: function () { return CleanObject(Object.assign(Xrm.Events.SaveEventContext(), {})) },
            /**
             * Interface for process stage change event arguments.
             * @deprecated Use {@link Xrm.Events.StageChangeEventArguments} instead.
             */
            StageChangeEventArguments: function () { return CleanObject(Object.assign(Xrm.Events.StageChangeEventArguments(), {})) },
            /**
             * Interface for process stage selected event arguments.
             * @deprecated Use {@link Xrm.Events.StageSelectedEventArguments} instead.
             */
            StageSelectedEventArguments: function () { return CleanObject(Object.assign(Xrm.Events.StageSelectedEventArguments(), {})) },
            /**
             * Interface for Xrm.Page.ui controls.
             * @see {@link UiElement}
             * @deprecated Use {@link Xrm.Controls.Control} instead.
             */
            Control: function () { return CleanObject(Object.assign(Xrm.Controls.Control(), {})) },
            /**
             * Interface for a standard control.
             * @see {@link Control}
             * @deprecated Use {@link Xrm.Controls.StandardControl} instead.
             */
            StandardControl: function () { return CleanObject(Object.assign(Xrm.Controls.StandardControl(), {})) },
            /**
             * Interface for Auto Lookup Control.
             * This is not an Entity Lookup, but a control that supports AutoComplete / KeyPress Events (Text or Number)
             * @remarks This interface is not supported for CRM mobile clients (phones or tablets) and the interactive service hub.  It is only available for Updated entities.
             * @see {@link StandardControl}
             * @deprecated Use {@link Xrm.Controls.AutoLookupControl} instead.
             */
            AutoLookupControl: function () { return CleanObject(Object.assign(Xrm.Controls.AutoLookupControl(), {})) },
            /**
             * Interface for a String control.
             * @see {@link StandardControl}
             * @deprecated Use {@link Xrm.Controls.StringControl} instead.
             */
            StringControl: function () { return CleanObject(Object.assign(Xrm.Controls.StringControl(), {})) },
            /**
             * Interface for a Number control.
             * @see {@link StandardControl}
             * @deprecated Use {@link Xrm.Controls.NumberControl} instead.
             */
            NumberControl: function () { return CleanObject(Object.assign(Xrm.Page.AutoLookupControl(), {})) },
            /**
             * Interface for a Date control.
             * @see {@link StandardControl}
             * @deprecated Use {@link Xrm.Controls.DateControl} instead.
             */
            DateControl: function () { return CleanObject(Object.assign(Xrm.Page.StandardControl(), {})) },
            /**
             * Interface for a Lookup control.
             * @see {@link StandardControl}
             * @deprecated Use {@link Xrm.Controls.LookupControl} instead.
             */
            LookupControl: function () { return CleanObject(Object.assign(Xrm.Controls.LookupControl(), {})) },
            /**
             * Interface for an OptionSet control.
             * @see {@link StandardControl}
             * @deprecated Use {@link Xrm.Controls.OptionSetControl} instead.
             */
            OptionSetControl: function () { return CleanObject(Object.assign(Xrm.Controls.OptionSetControl(), {})) },
            /**
             * Interface for a CRM grid control.
             *
             * @see {@link Control}
             * @deprecated  Use {@link Xrm.Controls.GridControl} instead.
             */
            GridControl: function () { return CleanObject(Object.assign(Xrm.Controls.GridControl(), {})) },
            /**
             * Interface for a framed control, which is either a Web Resource or an Iframe.
             * @see {@link Control}
             * @remarks     An Iframe control provides additional methods, so use {@link IframeControl} where
             *              appropriate.  Silverlight controls should use {@link SilverlightControl}.
             * @deprecated  Use {@link Xrm.Controls.FramedControl} instead.
             */
            FramedControl: function () { return CleanObject(Object.assign(Xrm.Controls.FramedControl(), {})) },
            /**
             * Interface for an Iframe control.
             * @see {@link FramedControl}
             * @deprecated  Use {@link Xrm.Controls.IframeControl} instead.
             */
            IframeControl: function () { return CleanObject(Object.assign(Xrm.Controls.IframeControl(), {})) },
            /**
             * Interface for a Silverlight control.
             * @see {@link Control}
             * @deprecated Use {@link Xrm.Controls.SilverlightControl} instead.
             */
            SilverlightControl: function () { return CleanObject(Object.assign(Xrm.Controls.SilverlightControl(), {})) },
            /**
             * Interface for a Timeline control.
             * @see {@link Control}
             * @deprecated Use {@link Xrm.Controls.TimelineWall} instead.
             */
            TimelineWall: function () { return CleanObject(Object.assign(Xrm.Controls.TimelineWall(), {})) },
            /**
             * Interface for a form tab.
             * @see {@link UiElement}
             * @see {@link UiFocusable}
             * @deprecated Use {@link Xrm.Controls.Tab} instead.
             */
            Tab: function () { return CleanObject(Object.assign(Xrm.Controls.Tab(), {})) },
            /**
             * Interface for a form section.
             * @see {@link UiElement}
             * @deprecated Use {@link Xrm.Controls.Section} instead.
             */
            Section: function () { return CleanObject(Object.assign(Xrm.Controls.Section(), {})) },
            /**
             * Module for the Xrm.Page.data API.
             * @deprecated Use {@link Xrm.Form.data formContext.data} has been deprecated.
             */
            data: CleanObject({
                /**
                 * Interface for the Xrm.Page.data.process API.
                 * @deprecated Use {@link Xrm.ProcessFlow.ProcessManager} instead.
                 */
                ProcessManager: function () {
                    return CleanObject(Object.assign(Xrm.ProcessFlow.ProcessManager(), {
                    }));
                },
                /**
                 * Called when method to get active processes is complete
                 * @param status The result of the get active processes operation.
                 * @remarks **Returns object with the following key-value pairs**:
                     * * CreatedOn
                     * * ProcessDefinitionID
                     * * ProcessDefinitionName
                     * * ProcessInstanceID
                     * * ProcessInstanceName
                     * * StatusCodeName
                     * @deprecated Use {@link Xrm.ProcessFlow.GetProcessInstancesDelegate} instead.
                     */
                GetProcessInstancesDelegate: function (object) { },
                /**
                 * Called when method to set active process is complete
                 * @param status The result of the set active process operation.
                 * @remarks **Values returned are**:
                 * * success        (The operation succeeded.)
                 * * invalid        (The processInstanceId isn’t valid or the process isn’t enabled.)
                 * @deprecated Use {@link Xrm.ProcessFlow.SetProcessInstanceDelegate} instead.
                 */
                SetProcessInstanceDelegate: function (status) { },
                /**
                 * Called when process change methods have completed.
                 * @param status The result of the process change operation.
                 * @remarks **Values returned are**:
                 * * success        (The operation succeeded.)
                 * * crossEntity    (The previous stage is for a different entity.)
                 * * beginning      (The active stage is the first stage of the active path.)
                 * * invalid        (The operation failed because the selected stage isn’t the same as the active stage.)
                 * * unreachable    (The stage exists on a different path.)
                 * @deprecated Use {@link Xrm.ProcessFlow.ProcessCallbackDelegate} instead.
                 */
                ProcessCallbackDelegate: function (status) { },
                /**
                 * Called when process set status method has completed.
                 * @param status The new status of the process instance
                 * @remarks **Values returned are**:
                 * * active
                 * * aborted
                 * * finished
                 * @deprecated Use {@link Xrm.ProcessFlow.ProcessSetStatusDelegate} instead.
                 */
                ProcessSetStatusDelegate: function (status) { },
                /**
                 * Represents a key-value pair, where the key is the Process Flow's ID, and the value is the name thereof.
                 * @deprecated Use {@link Xrm.ProcessFlow.ProcessDictionary} instead.
                 */
                ProcessDictionary: function () { return CleanObject(Object.assign(Xrm.ProcessFlow.ProcessDictionary(), {})) }
            }),
            /**
             * Contains properties and methods to retrieve information about the user interface as well as collections for several subcomponents of the form.
             * @deprecated Use {@link Xrm.Form.ui formContext.ui} instead.
             */
            ui: CleanObject({
                /**
                 * Form Notification Levels for Xrm.Ui.setFormNotification().
                 * @deprecated Use {@link Xrm.FormNotificationLevel} instead.
                 */
                FormNotificationLevel: Xrm.FormNotificationLevel,
                /**
                 * Display States for Xrm.ui.ProcessMonitor.setDisplayState().
                 * @deprecated Use {@link Xrm.DisplayState} instead.
                 */
                DisplayState: Xrm.DisplayState,
                /**
                 * Interface for Xrm.Page.ui.process API
                 * @deprecated Use {@link Xrm.Controls.ProcessControl} instead.
                 */
                ProcessManager: function () { return CleanObject(Object.assign(Xrm.Controls.ProcessControl(), {})) },
                /**
                 * Interface for a grid.  Use Grid methods to access information about data in the grid. Grid is returned by the
                 * GridControl.getGrid method.
                 * @deprecated Use {@link Xrm.Controls.Grid} instead.
                 */
                Grid: function () { return CleanObject(Object.assign(Xrm.Controls.Grid(), {})) },
                /**
                 * Interface for a grid row.  Use the GridRow.getData method to access the GridRowData. A collection of GridRow is
                 * returned by Grid.getRows and Grid.getSelectedRows methods.
                 * In V9 - this is essentailly a form context.
                 * @deprecated Use {@link Xrm.Controls.Grid.GridRow} instead.
                 */
                GridRow: function () { return CleanObject(Object.assign(Xrm.Controls.Grid.GridRow(), {})) },
                /**
                 * Interface for grid row data.  Use the GridRowData.getEntity method to access the GridEntity. GridRowData is
                 * returned by the GridRow.getData method.
                 * @deprecated Use {@link Xrm.Controls.Grid.GridRowData} instead.
                 */
                GridRowData: function () { return CleanObject(Object.assign(Xrm.Controls.Grid.GridRowData(), {})) },
                /**
                 * Interface for a grid entity.  Use the GridEntity methods to access data about the specific records in the rows.
                 * GridEntity is returned by the GridRowData.getEntity method.
                 * @deprecated Use {@link Xrm.Controls.Grid.GridRowData} instead.v
                 */
                GridEntity: function () { return CleanObject(Object.assign(Xrm.Controls.Grid.GridEntity(), {})) },
                /**
                 * Interface for the view selector.  Use the ViewSelector methods to get or set information about the view selector
                 * of the grid control.
                 * @deprecated Use {@link Xrm.Controls.ViewSelector} instead.
                 */
                ViewSelector: function () { return CleanObject(Object.assign(Xrm.Controls.ViewSelector(), {})) },
                /**
                 * Interface for a view selector item. This object contains data that identifies a view. Use this as a parameter to
                 * the ViewSelector.setCurrentView method.
                 * @deprecated Use {@link Xrm.Controls.ViewSelectorItem} instead.
                 */
                ViewSelectorItem: function () { return CleanObject(Object.assign(Xrm.Controls.ViewSelectorItem(), {})) },
                /**
                 * Interface for a quick view control instance on a form.
                 * @see {@link https://msdn.microsoft.com/en-us/library/mt736908.aspx External Link: Xrm.Page.ui quickForms (client-side reference)}
                 * @deprecated Use {@link Xrm.Controls.ViewSelectorItem} instead.
                 */
                QuickForm: function () { return CleanObject(Object.assign(Xrm.Controls.QuickFormControl(), {})) }
            })
        }),
        /**
         * Interface for a Lookup value.
         */
        LookupValue: function () {
            return CleanObject({
                /**
                 * The identifier.
                 */
                id: '',
                /**
                     * The name
                     */
                name: '',
                /**
                 * Type of the entity.
                 */
                entityType: ''
            })
        },
        /**
         * Interface for an OptionSet value.
         */
        OptionSetValue: function () {
            return CleanObject({
                /**
                 * The label text.
                 */
                text: '',
                /**
                 * The value, as a number
                 */
                value: 0
            })
        },
        /**
         * A collection of types and methods for working with formContext attributes.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
         */
        Attributes: CleanObject({
            /**
             * Requirement Level for {@link Attributes.Attribute.getRequiredLevel Attributes.Attribute.getRequiredLevel()} and
             * Optional types: "none" | "recommended" | "required"
             * {@link Attributes.Attribute.setRequiredLevel Attributes.Attribute.setRequiredLevel()}.
             * @see {@link XrmEnum.AttributeRequirementLevel}
             */
            RequirementLevel: '',
            /**
             * Date attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.DateAttribute DateAttribute}.
             * Optional types: "date" | "datetime"
             * @see {@link XrmEnum.DateAttributeFormat}
             */
            DateAttributeFormat: '',
            /**
             * Integer attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.NumberAttribute NumberAttribute}.
             * Optional types: "duration" | "none"
             * @see {@link XrmEnum.IntegerAttributeFormat}
             */
            IntegerAttributeFormat: '',
            /**
             * OptionSet attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.OptionSetAttribute OptionSetAttribute}.
             * Optional types: "language" | "timezone"
             * @see {@link XrmEnum.OptionSetAttributeFormat}
             */
            OptionSetAttributeFormat: '',
            /**
             * String attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.StringAttribute StringAttribute}.
             * Optional types: "email" | "phone" | "text" | "textarea" | "tickersymbol" | "url"
             * @see {@link XrmEnum.StringAttributeFormat}
             */
            StringAttributeFormat: '',
            /**
             * Attribute types for {@link Attributes.Attribute.setDisplayState()}.
             * Optional types: "boolean" | "datetime" | "decimal" | "double" | "integer" |"lookup" | "memo" | "money" | "multioptionset" | "optionset" | "string"
             * @see {@link XrmEnum.AttributeType}
             */
            AttributeType: '',
            /**
             * Attribute formats for {@link Attributes.Attribute.getFormat Attributes.Attribute.getFormat()}.
             * Optional types: DateAttributeFormat | IntegerAttributeFormat | OptionSetAttributeFormat | StringAttributeFormat
             * @see {@link XrmEnum.DateAttributeFormat}
             * @see {@link XrmEnum.IntegerAttributeFormat}
             * @see {@link XrmEnum.OptionSetAttributeFormat}
             * @see {@link XrmEnum.StringAttributeFormat}
             */
            AttributeFormat: '',
            /**
             * Interface for an Entity attribute.
             */
            Attribute: function () {
                return CleanObject({
                    /**
                     * Adds a handler to be called when the attribute's value is changed.
                     * @param {function(EventContext context)} handler The function reference.
                     */
                    addOnChange: function (handler) { return },
                    /**
                     * Fire all "on change" event handlers.
                     */
                    fireOnChange: function () { return },
                    /**
                     * Gets attribute type. "boolean" | "datetime" | "decimal" | "double" | "integer" |"lookup" | "memo" | "money" | "multioptionset" | "optionset" | "string"
                     * @returns {string} The attribute's type name.<BR><BR>
                     * **Values returned are**:
                     * * boolean
                     * * datetime
                     * * decimal
                     * * double
                     * * integer
                     * * lookup
                     * * memo
                     * * money
                     * * optionset
                     * * string
                     */
                    getAttributeType: function () { return Xrm.Attributes.AttributeType },
                    /**
                     * Gets the attribute format. DateAttributeFormat | IntegerAttributeFormat | OptionSetAttributeFormat | StringAttributeFormat
                     * @returns {string} The format of the attribute.<BR><BR>
                     * **Values returned are**:
                     * * date           (datetime)
                     * * datetime       (datetime)
                     * * duration       (integer)
                     * * email          (string)
                     * * language       (optionset)
                     * * none           (integer)
                     * * phone          (string)
                     * * text           (string)
                     * * textarea       (string)
                     * * tickersymbol   (string)
                     * * timezone       (optionset)
                     * * url            (string)
                     * @see {@link getAttributeType}
                     */
                    getFormat: function () { return Xrm.Attributes.AttributeFormat },
                    /**
                     * Gets a boolean value indicating whether this Attribute has unsaved changes.
                     * @returns {boolean} true if there are unsaved changes, otherwise false.
                     */
                    getIsDirty: function () { return true },
                    /**
                     * Gets the logical name of the attribute.
                     * @returns {string} The logical name.
                     */
                    getName: function () { return '' },
                    /**
                     * Gets a reference to the record context of this attribute.
                     * @returns The parent record context.
                     */
                    getParent: function () { return Xrm.Entity() },
                    /**
                     * Gets the current level of requirement for the attribute. "none" | "recommended" | "required"
                     * @returns {string} The required level, as either "none", "required", or "recommended"
                     */
                    getRequiredLevel: function () { return Xrm.Attributes.RequirementLevel },
                    /**
                     * Gets current submit mode for the attribute. "always" | "dirty" | "never"
                     * @returns {string} The submit mode, as either "always", "never", or "dirty"
                     * @remarks The default value is "dirty"
                     */
                    getSubmitMode: function () { return Xrm.SubmitMode },
                    /**
                     * Gets the current user's privileges for the attribute.
                     * @returns The user privileges.
                     */
                    getUserPrivilege: function () { return Xrm.Privilege() },
                    /**
                     * Removes the handler from the "on change" event.
                     * @param {function(EventContext context)} handler The handler.
                     */
                    removeOnChange: function (handler) { return },
                    /**
                     * Sets the required level.
                     * @param {string} requirementLevel The requirement level, as either "none", "required", or "recommended"
                     * @see {@link XrmEnum.AttributeRequirementLevel}
                         */
                    setRequiredLevel: function (requirementLevel) { return },
                    /**
                     * Sets the submit mode.
                     * @param {string} submitMode The submit mode, as either "always", "never", or "dirty".
                     * @default submitMode "dirty"
                     * @see {@link XrmEnum.AttributeRequirementLevel}
                     */
                    setSubmitMode: function (submitMode) { return },
                    /**
                     * A collection of all the controls on the form that interface with this attribute.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection(),
                    /**
                     * Gets the value.
                     * @returns The value.
                     */
                    getValue: function () { return '' },
                    /**
                     * Sets the value.
                     * @param {any} value The value.
                     */
                    setValue: function (value) { return }
                })
            },
            /**
             * Interface for a Number attribute.
             * @see {@link Attribute}
             */
            NumberAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.Attribute(), {
                    /**
                     * Gets the attribute format. "duration" | "none"
                     * @returns {string} The format of the attribute.
                     * Values returned are: duration, none
                     */
                    getFormat: function () { return Xrm.Attributes.IntegerAttributeFormat },
                    /**
                     * Gets the maximum value allowed.
                     * @returns {number} The maximum value allowed.
                     */
                    getMax: function () { return 0 },
                    /**
                     * Gets the minimum value allowed.
                     * @returns {number} The minimum value allowed.
                     */
                    getMin: function () { return 0 },
                    /**
                     * Gets the attribute's configured precision.
                     * @returns {number} The total number of allowed decimal places.
                     */
                    getPrecision: function () { return 0 },
                    /**
                     * Gets the value.
                     * @returns {number} The value.
                     */
                    getValue: function () { return 0 },
                    /**
                     * Sets the value.
                     * @param {number} value The value.
                     * @remarks Attributes on Quick Create Forms will not save values set with this method.
                     */
                    setValue: function (value) { return },
                    /**
                     * A collection of all the controls on the form that interface with this attribute.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection()
                }));
            },
            /**
             * Interface for a String attribute.
             * @see {@link Attribute}
             */
            StringAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.Attribute(), {
                    /**
                     * Gets the attribute format. "email" | "phone" | "text" | "textarea" | "tickersymbol" | "url"
                     * @returns {string} The format of the attribute.
                     * Values returned are: email, phone, text, textarea, tickersymbol, url
                     */
                    getFormat: function () { return Xrm.Attributes.StringAttributeFormat },
                    /**
                     * Gets maximum length allowed.
                     * @returns {number} The maximum length allowed.
                     * @remarks The email form's "Description" attribute does not have the this method.
                     */
                    getMaxLength: function () { return 0 },
                    /**
                     * Gets the value.
                     *
                     * @returns {string} The value.
                     */
                    getValue: function () { return '' },
                    /**
                     * Sets the value.
                     * @param {string} value The value.
                     * @remarks A String field with the {@link Attribute.getFormat|email} format enforces email
                     *          address formatting. Attributes on Quick Create Forms will not save values set
                     *          with this method.
                     */
                    setValue: function (value) { return },
                    /**
                     * A collection of all the controls on the form that interface with this attribute.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection()
                }));
            },
            /**
             * Common interface for enumeration attributes (OptionSet and Boolean).
             * @see {@link Attribute}
             */
            EnumAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.Attribute(), {
                    /**
                     * Gets the initial value of the attribute.
                     * @returns The initial value.
                     * @remarks Valid for OptionSet and boolean attribute types
                     */
                    getInitialValue: function () { return '' }
                }));
            },
            /**
             * Interface for a Boolean attribute.
             * @see {@link EnumAttribute}
             */
            BooleanAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.EnumAttribute(), {
                    /**
                     * Gets the initial value of the attribute.
                     * @returns {boolean} The initial value.
                     * @remarks Valid for OptionSet and boolean attribute types
                     */
                    getInitialValue: function () { return true },
                    /**
                     * Gets the value.
                     * @returns {boolean} true if it succeeds, false if it fails.
                     */
                    getValue: function () { return true },
                    /**
                     * Sets the value.
                     * @param {boolean} value The value.
                     * @remarks Attributes on Quick Create Forms will not save values set with this method.
                     */
                    setValue: function (value) { return }
                }));
            },
            /**
             * Interface for a Date attribute.
             *
             * @see {@link Attribute}
             */
            DateAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.Attribute(), {
                    /**
                     * Gets the attribute format. "date" | "datetime"
                     *
                     * @returns {string} The format of the attribute.
                     * Values returned are: date, datetime
                     */
                    getFormat: function () { return Xrm.Attributes.DateAttributeFormat },
                    /**
                     * Gets the value.
                     * @returns {Date} The value.
                     */
                    getValue: function () { return new Date() },
                    /**
                     * Sets the value.
                     * @param {Date} value The value.
                     * @remarks Attributes on Quick Create Forms will not save values set with this method.
                     */
                    setValue: function (value) { return },
                    /**
                     * A collection of all the controls on the form that interface with this attribute.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection()
                }));
            },
            /**
             * Interface an OptionSet attribute.
             * @see {@link EnumAttribute}
             */
            OptionSetAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.EnumAttribute(), {
                    /**
                     * Gets the attribute format. "language" | "timezone"
                     * @returns {string} The format of the attribute.
                     * Values returned are: language, timezone
                     */
                    getFormat: function () { return Xrm.Attributes.OptionSetAttributeFormat },
                    /**
                     * Gets the initial value of the attribute.
                     * @returns {number} The initial value.
                     * @remarks Valid for OptionSet and boolean attribute types
                     */
                    getInitialValue: function () { return 0 },
                    getOption: function () {
                        /// <signature>
                        /// <summary>Gets the option matching a value.</summary>
                        /// <param name="value" type="number">The enumeration value of the option desired.</param>
                        /// <returns type="OptionSetValue" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets the option matching a label.</summary>
                        /// <param name="label" type="string">The label of the option desired.</param>
                        /// <returns type="OptionSetValue" />
                        ///</signature>
                        return Xrm.OptionSetValue()
                    },
                    /**
                     * Gets all of the options.
                     * @returns An array of options.
                     */
                    getOptions: function () { return [Xrm.OptionSetValue()] },
                    /**
                     * Gets selected option.
                     * @returns The selected option.
                     */
                    getSelectedOption: function () { return Xrm.OptionSetValue() },
                    /**
                     * Gets the label of the currently selected option.
                     * @returns {string} The current value's label.
                     */
                    getText: function () { return '' },
                    /**
                     * Gets the value.
                     * @returns {number} The value.
                     */
                    getValue: function () { return 0 },
                    /**
                     * Sets the value.
                     * @param {number} value The value.
                     * @remarks     The getOptions() method returns option values as strings. You must use parseInt
                     *              to convert them to numbers before you can use those values to set the value of an
                     *              OptionSet attribute. Attributes on Quick Create Forms will not save values set
                     *              with this method.
                     */
                    setValue: function (value) { return },
                    /**
                     * A collection of all the controls on the form that interface with this attribute.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection()
                }));
            },
            /**
             * Interface a Lookup attribute.
             *
             * @see {@link Attribute}
             */
            LookupAttribute: function () {
                return CleanObject(Object.assign(Xrm.Attributes.Attribute(), {
                    /**
                     * Gets a boolean value indicating whether the Lookup is a multi-value PartyList.
                     * @returns {boolean} true the attribute is a PartyList, otherwise false.
                     */
                    getIsPartyList: function () { return true },
                    /**
                     * Gets the value.
                     * @returns An array of LookupValue.
                     */
                    getValue: function () { return [Xrm.LookupValue()] },
                    /**
                     * Sets the value.
                     * @param {LookupValue[]} value The value.
                     * @remarks Attributes on Quick Create Forms will not save values set with this method.
                     */
                    setValue: function (value) { return },
                    /**
                     * A collection of all the controls on the form that interface with this attribute.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection()
                }));
            }
        }),
        /**
         * A collection of types and methods for working with formContext controls.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
         */
        Controls: CleanObject({
            /**
             * Control type for formContext.ui.quickForms.getControlType().
             */
            ControlQuickFormType: "quickform",
            /**
                 * Control types for {@link Controls.Control.getControlType Controls.Control.getControlType()}.
                 * Optional types: "standard" | "iframe" | "lookup" | "optionset" | "subgrid" | "webresource" | "notes" | "timercontrol" | "kbsearch" | "timelinewall" | ControlQuickFormType
                 * @see {@link XrmEnum.StandardControlType}
                 */
            ControlType: '',
            /**
             * Interface for UI elements with labels.
             */
            UiLabelElement: function () {
                return CleanObject({
                    /**
                     * Gets the label.
                     * @returns {string} The label.
                     */
                    getLabel: function () { return '' },
                    /**
                     * Sets the label.
                     * @param {string} label The label.
                     */
                    setLabel: function (label) { return }
                })
            },
            /**
             * Interface for UI elements which can have the visibility value read.
             */
            UiCanGetVisibleElement: function () {
                return CleanObject({
                    /**
                     * Gets the visibility state.
                     * @returns {boolean} true if the tab is visible, otherwise false.
                     */
                    getVisible: function () { return true }
                })
            },
            /**
             * Interface for UI elements which can have the visibility value updated.
             */
            UiCanSetVisibleElement: function () {
                return CleanObject({
                    /**
                     * Sets the visibility state.
                     * @param {boolean} visible true to show, false to hide.
                     */
                    setVisible: function (visible) { return }
                })
            },
            /**
             * Base interface for standard UI elements.
             */
            UiStandardElement: function () {
                return CleanObject(Object.assign(Xrm.Controls.UiCanGetVisibleElement(), Xrm.Controls.UiLabelElement(), {
                    /**
                     * Sets the visibility state.
                     * @param {boolean} visible true to show, false to hide.
                     */
                    setVisible: function (visible) { return }
                }));
            },
            /**
             * Interface for focusable UI elements.
             */
            UiFocusable: function () {
                return CleanObject({
                    /**
                     * Sets focus on the element.
                     */
                    setFocus: function () { return }
                })
            },
            /**
             * Interface for controls which methods provide immediate feedback or take actions as user types in a control.
             * Contains methods which can be used to perform data validations in a control even before the user commits (saves) the value in a form.
             */
            UiKeyPressable: function () {
                return CleanObject({
                    /**
                     * Use this to add a function as an event handler for the keypress event so that the function is called when you type a character in the specific text or number field.
                     * For a sample JavaScript code that uses the addOnKeyPress method to configure the auto-completion experience, see Sample: Auto-complete in CRM controls.
                     * @deprecated Deprecated in v9.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                     * @param {function(EventContext context)} handler The function reference.
                     */
                    addOnKeyPress: function (handler) { return },
                    /**
                     * Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
                     */
                    fireOnKeyPress: function () { return },
                    /**
                     * Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
                     * @deprecated Deprecated in v9.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                     * Remarks:  If an anonymous function is set using addOnKeyPress, it can’t be removed using this method.
                     * @param {function(EventContext context)} handler The function reference.
                     */
                    removeOnKeyPress: function (handler) { return }
                })
            },
            /**
             * Interface for Result value of AutoCompleteResultSet
             */
            AutoCompleteResult: function () {
                return CleanObject({
                    /**
                     * The Identifier
                     */
                    id: '',
                    /**
                         * Url of the icon to display
                         */
                    icon: '',
                    /**
                     * Display value(s) for this auto-complete option
                     */
                    fields: []
                })
            },
            /**
             * Interface for command of AutoCompleteResultSet.  This is displayed at the bottom of the auto complete view
             */
            AutoCompleteCommand: function () {
                return CleanObject({
                    /**
                     * The Identifier
                     */
                    id: '',
                    /**
                     * Url of the icon to display
                     */
                    icon: '',
                    /**
                     * Label to display at the bottom of the auto complete view
                     */
                    label: '',
                    /**
                     * Action to perform when user clicks on label
                     */
                    action: function () { return }
                })
            },
            /**
             * Interface for showAutoComplete argument
             */
            AutoCompleteResultSet: function () {
                return CleanObject({
                    /**
                     * Results to show
                     */
                    results: [Xrm.Controls.AutoCompleteResult()],
                    /**
                     * Command to show/execute at the bottom of the results displayed
                     */
                    commands: Xrm.Controls.AutoCompleteCommand()
                })
            },
            /**
             * Interface for controls.
             *
             * @see {@link UiElement}
             */
            Control: function () {
                return CleanObject(Object.assign(Xrm.Controls.UiLabelElement(), Xrm.Controls.UiCanGetVisibleElement(), {
                    /**
                     * Gets the controls type.
                     * @returns The control type.<BR><BR>
                     * **Values returned are**:
                     * * standard
                     * * iframe
                     * * lookup
                     * * optionset
                     * * subgrid
                     * * webresource
                     * * notes
                     * * timercontrol
                     * * kbsearch (CRM Online Only, use parature.d.ts)
                     * * quickform (see ui.QuickForm)
                     * * customcontrol: <namespace>.<name> (A custom control for mobile phone and tablet clients).
                     * * customsubgrid: <namespace>.<name> (A custom dataset control for mobile phone and tablet clients).
                     */
                    getControlType: function () { return '' },
                    /**
                     * Gets the name of the control on the form.
                     * @returns {string} The name of the control.
                     * @remarks     The name assigned to a control is not determined until the form loads. Changes to
                     *              the form may change the name assigned to a given control.
                     *              When you use the control getName method the name of the first control will be the
                     *              same as the name of the attribute. The second instance of a control for that
                     *              attribute will be "<attributeName>1". The pattern <attributeName>+N
                     *              will continue for each additional control added to the form for a specific
                     *              attribute. When a form displays a business process flow control in the header,
                     *              additional controls will be added for each attribute that is displayed in the
                     *              business process flow. These controls have a unique name like the following:
                     *              header_process_<attribute name>.
                     */
                    getName: function () { return '' },
                    /**
                     * Gets a reference to the Section parent of the control.
                     * @returns The parent Section.
                     */
                    getParent: function () { return Xrm.Controls.Section() }
                }));
            },
            /**
             * Interface for {@link Ui.navigation formContext.ui.navigation}.
             */
            Navigation: function () {
                return CleanObject({
                    /**
                     * A reference to the collection of available navigation items.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    items: Xrm.Collection.ItemCollection()
                })
            },
            /**
             * Interface for a navigation item.
             * @see {@link UiElement}
             * @see {@link UiFocusable}
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation External Link: formContext.ui.navigation item (Client API reference)}
             */
            NavigationItem: function () {
                return CleanObject(Object.assign(Xrm.Controls.UiStandardElement(), Xrm.Controls.UiFocusable(), {
                    /**
                     * Gets the name of the item.
                     * @returns {string} The identifier.
                     */
                    getId: function () { return '' }
                }));
            },
            /**
             * Interface for a standard control.
             * @see {@link Control}
             */
            StandardControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.Control(), Xrm.Controls.UiStandardElement(), Xrm.Controls.UiFocusable(), {
                    /**
                     * Clears the notification identified by uniqueId.
                     * @param {string} uniqueId (Optional) Unique identifier.
                     * @returns true if it succeeds, false if it fails.
                     * @remarks If the uniqueId parameter is not used, the current notification shown will be removed.
                     */
                    clearNotification: function (uniqueId) { return true },
                    /**
                     * Gets a boolean value, indicating whether the control is disabled.
                     * @returns {boolean} true if it is disabled, otherwise false.
                     */
                    getDisabled: function () { return true },
                    /**
                     * Sets the state of the control to either enabled, or disabled.
                     * @param {boolean} disabled true to disable, false to enable.
                     */
                    setDisabled: function (disabled) { return },
                    /**
                     * Sets a control-local notification message.
                     * @param {string} message The message.
                     * @param {string} uniqueId Unique identifier.
                     * @returns true if it succeeds, false if it fails.
                     * @remarks     When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon
                     *              appears next to the control. Tapping on the icon will display the message.
                     */
                    setNotification: function (message, uniqueId) { return true },
                    /**
                     * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification.
                     */
                    addNotification: function (notification) { return },
                    /**
                     * Gets the control's bound attribute.
                     * @returns The attribute.
                     */
                    getAttribute: function () { return Xrm.Attributes.Attribute() }
                }));
            },
            /**
             * Interface for Auto Lookup Control.
             * This is not an Entity Lookup, but a control that supports AutoComplete / KeyPress Events (Text or Number)
             * @remarks This interface is not supported for CRM mobile clients (phones or tablets) and the interactive service hub.  It is only available for Updated entities.
             * @deprecated Deprecated in v9.
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
             * @see {@link StandardControl}
             */
            AutoLookupControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.StandardControl(), Xrm.Controls.UiKeyPressable(), {
                    /**
                     * Gets the latest value in a control as the user types characters in a specific text or number field.
                     * This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control.
                     * The getValue method is different from the attribute getValue method because the control method retrieves the value from the control
                     * as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field.
                     */
                    getValue: function () { return '' },
                    /**
                     * Hides the auto-completion drop-down list configured for a specific text field
                     * @deprecated Deprecated in v9.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                     */
                    hideAutoComplete: function () { return },
                    /**
                     * Shows upt to 10 matching strings in a drop-down list as users press keys to type charactrer in a specific text field.
                     * On selecting an item in the drop-down list, the value in the text field changes to the selected item, the drop-down list disappears, and the OnChange event for the text field is invoked
                     * @deprecated Deprecated in v9.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
                     * @param {AutoCompleteResultSet} resultSet The results to show
                     */
                    showAutoComplete: function (resultSet) { return }
                }));
            },
            /**
             * Interface for a String control.
             * @see {@link StandardControl}
             */
            StringControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.AutoLookupControl(), {
                    /**
                     * Gets the control's bound attribute.
                     * @returns The attribute.
                     */
                    getAttribute: function () { return Xrm.Attributes.StringAttribute() }
                }));
            },
            /**
             * Interface for a Number control.
             * @see {@link StandardControl}
             */
            NumberControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.AutoLookupControl(), {
                    /**
                     * Gets the control's bound attribute.
                     * @returns The attribute.
                     */
                    getAttribute: function () { return Xrm.Attributes.NumberAttribute() }
                }));
            },
            /**
             * Interface for a Date control.
             * @see {@link StandardControl}
             */
            DateControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.StandardControl(), {
                    /**
                     * Gets the control's bound attribute.
                     * @returns The attribute.
                     */
                    getAttribute: function () { return Xrm.Attributes.DateAttribute() },
                    /**
                     * Gets the status of the time-of-day component of the Date control.
                     * @returns {boolean} true if the time is shown, otherwise false.
                     */
                    getShowTime: function () { return true },
                    /**
                     * Sets the visibility of the time component of the Date control.
                     * @param {boolean} showTimeValue true to show, false to hide the time value.
                     */
                    setShowTime: function (showTimeValue) { return }
                }));
            },
            /**
             * Interface for a Lookup control.
             * @see {@link StandardControl}
             */
            LookupControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.StandardControl(), {
                    /**
                     * Adds a handler to the "pre search" event of the Lookup control.
                 * @param {function(EventContext context)} handler The handler.
                     */
                    addPreSearch: function (handler) { return },
                    /**
                     * Adds an additional custom filter to the lookup, with the "AND" filter operator.
                     * Can only be used within a "pre search" event handler
                     * @see {@link addPreSearch}
                     * @param {string} filter Specifies the filter, as a serialized FetchXML "filter" node.
                     * @param {string} entityLogicalName (Optional) The logical name of the entity.
                     * @remarks     If entityLogicalName is not specified, the filter will be applied to all entities
                     *              valid for the Lookup control.
                     * @example     Example filter: <filter type="and">
                     *                              <condition attribute="address1_city" operator="eq" value="Redmond" />
                     *                              </filter>
                     */
                    addCustomFilter: function (filter, entityLogicalName) { return },
                    /**
                     * Adds a custom view for the Lookup dialog.
                     * @param {string} viewId Unique identifier for the view, in Guid format.
                     * @param {string} entityName Name of the entity.
                     * @param {string} viewDisplayName Name of the view to display.
                     * @param {string} fetchXml The FetchXML query for the view's contents, serialized as a string.
                     * @param {string} layoutXml The Layout XML, serialized as a string.
                     * @param {boolean} isDefault true, to treat this view as default.
                     * @remarks Cannot be used on "Owner" Lookup controls.
                     *          The viewId is never saved to CRM, but must be unique across available views.  Generating
                     *          a new value can be accomplished with a {@link http://www.guidgen.com/ Guid generator(external link)}.
                     * @example Example viewId value: "{00000000-0000-0000-0000-000000000001}"
                     * @see {@link http://msdn.microsoft.com/en-us/library/gg334522.aspx External Link: Layout XML Reference}
                     */
                    addCustomView: function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) { return },
                    /**
                     * Gets the control's bound attribute.
                     * @returns The attribute.
                     */
                    getAttribute: function () { return Xrm.Attributes.LookupAttribute() },
                    /**
                     * Gets the unique identifier of the default view.
                 * @returns {string} The default view, in Guid format.
                     * @example Example return: "{00000000-0000-0000-0000-000000000000}"
                     */
                    getDefaultView: function () { return '' },
                    /**
                     * Removes the handler from the "pre search" event of the Lookup control.
                     * @param {function} handler The handler.
                     */
                    removePreSearch: function (handler) { return },
                    /**
                     * Sets the Lookup's default view.
                     * @param {string} viewGuid Unique identifier for the view.
                     * @example Example viewGuid value: "{00000000-0000-0000-0000-000000000000}"
                     */
                    setDefaultView: function (viewGuid) { return },
                    /**
                     * Gets the types of entities allowed in the lookup control.
                     */
                    getEntityTypes: function () { return [] },
                    /**
                     * Sets the types of entities allowed in the lookup control.
                     */
                    setEntityTypes: function (entityLogicalNames) { return }
                }));
            },
            /**
             * Interface for an OptionSet control.
             *
             * @see {@link StandardControl}
             */
            OptionSetControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.StandardControl(), {
                    /**
                     * Adds an option.
                     *
                     * @param {OptionSetValue} option The option.
                     * @param {number} index (Optional) zero-based index of the option.
                     *
                         * @remarks This method does not check that the values within the options you add are valid.
                         *          If index is not provided, the new option will be added to the end of the list.
                         */
                    addOption: function (option, index) { return },
                    /**
                     * Clears all options.
                     */
                    clearOptions: function () { return },
                    /**
                     * Gets the control's bound attribute.
                     *
                     * @returns The attribute.
                     */
                    getAttribute: function () { return Xrm.Attributes.OptionSetAttribute() },
                    /**
                     * Removes the option matching the value.
                     *
                     * @param {number} value The value.
                     */
                    removeOption: function (value) { return }
                }));
            },
            /**
             * Interface for a CRM grid control.
             *
             * @see {@link Control}
             */
            GridControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.Control(), {
                    /**
                     * Use this method to add event handlers to the GridControl's OnLoad event.
                     *
                     * @param {function} handler The event handler.
                     */
                    addOnLoad: function (handler) { return },
                    /**
                     * This method returns context information about the GridControl.
                     *
                     * @returns The context type.  Unknown: 0 | RibbonContextForm: 1 | RibbonContextListing: 2 | FormContextUnrelated: 3 | FormContextRelated: 4
                     */
                    getContextType: function () { return 0 },
                    /**
                     * Use this method to get the logical name of the entity data displayed in the grid.
                     *
                     * @returns {string} The entity name.
                     */
                    getEntityName: function () { return '' },
                    /**
                     * Use this method to get access to the Grid available in the GridControl.
                     * @returns The grid.
                     */
                    getGrid: function () { return Xrm.Controls._Grid() },
                    /**
                     * Use this method to get access to the ViewSelector available for the GridControl when it is configured to display views.
                     * @returns The view selector.
                     */
                    getViewSelector: function () { return Xrm.Controls.ViewSelector() },
                    /**
                     * Refreshes the sub grid.
                     * @remarks Not available during the "on load" event of the form.
                     */
                    refresh: function () { return },
                    /**
                     * Use this method to remove event handlers from the GridControl's OnLoad event.
                     * @param {function} handler The handler.
                     */
                    removeOnLoad: function (handler) { return }
                }));
            },
            /**
             * Interface for a grid.  Use Grid methods to access information about data in the grid. Grid is returned by the
             * GridControl.getGrid method.
             */
            _Grid: function () {
                return CleanObject({
                    /**
                     * Returns a collection of every GridRow in the Grid.
                     * @returns The rows.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    getRows: function () { return Xrm.Collection.ItemCollection() },
                    /**
                     * Returns a collection of every selected GridRow in the Grid.
                     * @returns The selected rows.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    getSelectedRows: function () { return Xrm.Collection.ItemCollection() },
                    /**
                     * Returns the total number of records in the Grid.
                     * @returns {number} The total record count.
                     */
                    getTotalRecordCount: function () { return 0 }
                })
            },
            Grid: CleanObject({
                /**
                 * Interface for a grid row.  Use the GridRow.getData method to access the GridRowData. A collection of GridRow is
                 * returned by Grid.getRows and Grid.getSelectedRows methods.
                 * In V9 - this is essentailly a form context
                 */
                GridRow: function () {
                    return CleanObject({
                        /**
                         * Provides methods to work with the row data.
                         */
                        data: Xrm.Data(),
                        /**
                         * Returns the GridRowData for the GridRow.
                         * @deprecated Deprecated in V9 - use data field instead
                         * @returns The data.
                         */
                        getData: function () { return Xrm.Controls.Grid.GridRowData() }
                    })
                },
                /**
                 * Interface for grid row data.  Use the GridRowData.getEntity method to access the GridEntity. GridRowData is
                 * returned by the GridRow.getData method.
                 */
                GridRowData: function () {
                    return CleanObject({
                        /**
                         * Returns the GridEntity for the GridRowData.
                         * @returns The entity.
                         * @deprecated Use GridRow.data.entity instead of using GridRow.getData().getEntity().
                         */
                        getEntity: function () { return Xrm.Controls.Grid.GridEntity() }
                    })
                },
                /**
                 * Interface for a grid entity.  Use the GridEntity methods to access data about the specific records in the rows.
                 * GridEntity is returned by the GridRowData.getEntity method.
                 *
                 * @deprecated Use GridRow.data.entity instead.
                 */
                GridEntity: function () {
                    return CleanObject({
                        /**
                         * Returns the logical name for the record in the row.
                         *
                         * @returns {string} The entity name.
                         * @deprecated Use GridRow.data.entity.getEntityName() instead.
                         */
                        getEntityName: function () { return '' },
                        /**
                         * Returns a LookupValue that references this record.
                         *
                         * @returns The entity reference.
                         * @deprecated Use GridRow.data.entity.getEntityReference() instead.
                         */
                        getEntityReference: function () { return Xrm.LookupValue() },
                        /**
                         * Returns the id for the record in the row.
                         *
                         * @returns {string} The identifier of the GridEntity, in GUID format.
                         * @example Example return: "{00000000-0000-0000-0000-000000000000}"
                         * @deprecated Use GridRow.data.entity.getId() instead.
                         */
                        getId: function () { return '' },
                        /**
                     * Returns the primary attribute value for the record in the row.  (Commonly the name.)
                     *
                     * @returns {string} The primary attribute value.
                     * @deprecated Use GridRow.data.entity.getPrimaryAttributeValue() instead.
                     */
                        getPrimaryAttributeValue: function () { return '' }
                    })
                }
            }),
            /**
             * Interface for a framed control, which is either a Web Resource or an Iframe.
             * @see {@link Control}
             * @remarks     An Iframe control provides additional methods, so use {@link IframeControl} where
             *              appropriate.  Silverlight controls should use {@link SilverlightControl}.
             */
            FramedControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.Control(), {
                    /**
                     * Gets the DOM element containing the control.
                     * @returns The container object.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    getObject: function () { return '' },
                    /**
                     * Gets the URL value of the control.
                     * @returns {string} The source URL.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    getSrc: function () { return '' },
                    /**
                     * Sets the URL value of the control.
                     * @param {string} src The source URL.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    setSrc: function (src) { return }
                }));
            },
            /**
             * Interface for an Iframe control.
             * @see {@link FramedControl}
             */
            IframeControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.FramedControl(), Xrm.Controls.UiCanSetVisibleElement(), {
                    /**
                     * Gets initial URL defined for the Iframe.
                     * @returns {string} The initial URL.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    getInitialUrl: function () { return '' }
                }));
            },
            /**
             * Interface for a quick view control instance on a form.
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms External Link: formContext.ui.quickForms (Client API reference)}
             */
            QuickFormControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.Control(), Xrm.Controls.UiLabelElement(), Xrm.Controls.UiCanGetVisibleElement(), {
                    getControl: function (param) {
                        /// <signature>
                        /// <summary>Gets all controls.</summary>
                        /// <returns type="Control[]" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets a control matching controlName</summary>
                        /// <param name="controlName" type="string">Name of the control.</param>
                        /// <returns type="Control" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets an control by index.</summary>
                        /// <param name="index" type="number">The control index.</param>
                        /// <returns type="Control" />
                        ///</signature>
                        /// <signature>
                        /// <summary>Gets control collection by function.</summary>
                        /// <param name="delegateFunction" type="function(Attribute)">A matching delegate function</param>
                        /// <returns type="Control[]" />
                        ///</signature>
                        switch (typeof param) {
                            case 'undefined': return [Xrm.Controls.Control()];
                            case 'string': return Xrm.Controls.Control();
                            case 'number': return Xrm.Controls.Control();
                            case 'function': return [Xrm.Controls.Control()];
                        }
                    },
                    /**
                     * Gets the controls type.
                     * @returns Returns a string value ("quickform") that categorizes quick view controls.
                     */
                    getControlType: function () { return Xrm.Controls.ControlQuickFormType },
                    /**
                     * Returns whether the data binding for the constituent controls in a quick view control is complete.
                     * @returns {boolean}  True is the data binding for a constituent control is complete, otherwise false.
                     *          because the quick view form that the control is bound to may not have loaded completely.
                     *          As a result, using the getAttribute or any data-related methods on a constituent control might not work.
                     *          The isLoaded method for the quick view control helps determine the data binding status for constituent controls in a quick view control.
                     * @remarks The data binding for the constituent controls in a quick view control may not be complete during the main form OnLoad event
                     */
                    isLoaded: function () { return true },
                    /**
                     * Refreshes the data displayed in a quick view control.
                     */
                    refresh: function () { return }
                }));
            },
            /**
             * Interface for a Silverlight control.
             * @see {@link Control}
             * @deprecated The Silverlight WebResource is deprecated on the web client, and is not supported on the new Unified Interface in v9.
             * Instead of silverlight, use custom controls created using the HTML web resources with HTML5 to create UI components to visualize and interact with data.
             */
            SilverlightControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.Control(), {
                    /**
                     * Gets the query string value passed to Silverlight.
                     * @returns {string} The data.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    getData: function () { return '' },
                    /**
                     * Sets the query string value passed to Silverlight.
                     * @param {string} data The data.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    setData: function (data) { return },
                    /**
                     * Gets the DOM element containing the control.
                     * @returns The container object.
                     * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
                     */
                    getObject: function () { return '' }
                }));
            },
            /**
             * Interface for a Timeline control.
             * @see {@link Control}
             */
            TimelineWall: function () {
                return CleanObject(Object.assign(Xrm.Controls.Control(), {
                    /**
                     * Refreshes the data displayed in a timelinewall and timer control.
                     */
                    refresh: function () { return }
                }));
            },
            /**
             * Interface for a form tab.
             * @see {@link UiElement}
             * @see {@link UiFocusable}
             */
            Tab: function () {
                return CleanObject(Object.assign(Xrm.Controls.UiStandardElement(), Xrm.Controls.UiFocusable(), {
                    /**
                     * Gets display state of the tab. "collapsed" | "expanded"
                     * @returns {string} The display state, as either "expanded" or "collapsed"
                     */
                    getDisplayState: function () { return Xrm.DisplayState },
                    /**
                     * Gets the name of the tab.
                     * @returns {string} The name.
                     */
                    getName: function () { return '' },
                    /**
                     * Gets a reference to the {@link FormContext.ui formContext.ui} parent of the tab.
                     * @returns The parent.
                     */
                    getParent: function () { return Xrm.Ui() },
                    /**
                     * Sets display state of the tab.
                 * @param {string} displayState Display state of the tab, as either "expanded" or "collapsed"
                     */
                    setDisplayState: function (displayState) { return },
                    /**
                     * A reference to the collection of form sections within this tab.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    sections: Xrm.Collection.ItemCollection()
                }));
            },
            /**
             * Interface for a form section.
             * @see {@link UiElement}
             */
            Section: function () {
                return CleanObject(Object.assign(Xrm.Controls.UiStandardElement(), {
                    /**
                     * Gets the name of the section.
                     * @returns {string} The name.
                     */
                    getName: function () { return '' },
                    /**
                     * Gets a reference to the parent {@link Tab}.
                     * @returns The parent.
                     */
                    getParent: function () { return Xrm.Controls.Tab() },
                    /**
                     * A reference to the collection of controls within this tab.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    controls: Xrm.Collection.ItemCollection()
                }));
            },
            AddControlNotificationOptions: function () {
                return CleanObject({
                    /**
                     * A collection of actions
                     */
                    actions: [Xrm.Controls.ControlNotificationAction()],
                    /**
                     * The message to display in the notification.
                     * In the current release, only the first message specified in this array will be displayed.
                     */
                    messages: [],
                    /**
                     * Defines the type of notification.
                     */
                    notificationLevel: Xrm.Controls.NotificationLevel,
                    /**
                     * The ID to use to clear this notification when using the clearNotification method.
                     */
                    uniqueId: ''
                })
            },
            /**
             * Constants to use with the addNotification method of form controls
             * Optional types: "ERROR" | "RECOMMENDATION"
             */
            NotificationLevel: '',
            /**
             * interface to define the actions on a control notification
             */
            ControlNotificationAction: function () {
                return CleanObject({
                    /**
                     * The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience.
                     */
                    message: '',
                    /**
                     * Array of functions. The corresponding actions for the message.
                     */
                    actions: []
                })
            },
            ProcessControl: function () {
                return CleanObject(Object.assign(Xrm.Controls.UiCanGetVisibleElement(), Xrm.Controls.UiCanSetVisibleElement(), {
                    /**
                     * Sets display state of the process flow control.
                     * @param {string} displayState Display state of the process flow control, as either "expanded" or "collapsed"
                     */
                    setDisplayState: function (displayState) { return },
                    /**
                 * Gets the display state of the process flow control. "collapsed" | "expanded"
                     */
                    getDisplayState: function () { return Xrm.DisplayState },
                    /**
                 * Reflow the UI of the process control
                 * @param {boolean} updateUI Specify true to update the UI of the process control; false otherwise.
                 * @param {string} parentStage ID of the parent stage.
                 * @param {string} nextStage ID of the next stage.
                 */
                    reflow: function (updateUI, parentStage, nextStage) { return }
                }));
            },
            /**
             * Interface for an entity's form selector item.
             */
            FormItem: function () {
                return CleanObject({
                    /**
                     * Gets the unique identifier of the form.
                     * @returns {string} The identifier, in Guid format.
                     */
                    getId: function () { return '' },
                    /**
                     * Gets the label for the form.
                     * @returns {string} The label.
                     */
                    getLabel: function () { return '' },
                    /**
                     * Navigates the user to this form.
                     */
                    navigate: function () { return }
                })
            },
            /**
             * Interface for the form selector API.
             */
            FormSelector: function () {
                return CleanObject({
                    /**
                     * Gets current form.
                     * @returns The current item.
                     * @remarks When only one form is available this method will return null.
                     */
                    getCurrentItem: function () { return Xrm.Controls.FormItem() },
                    /**
                     * A reference to the collection of available forms.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    items: Xrm.Collection.ItemCollection()
                })
            },
            /**
             * Interface for the view selector.  Use the ViewSelector methods to get or set information about the view selector
             * of the grid control.
             */
            ViewSelector: function () {
                return CleanObject({
                    /**
                     * Use this method to get a reference to the current view.
                     * @returns The current view.
                     */
                    getCurrentView: function () { return Xrm.Controls.ViewSelectorItem() },
                    /**
                     * Use this method to determine whether the view selector is visible.
                 * @returns {boolean} true if visible, false if not.
                     */
                    isVisible: function () { return true },
                    /**
                     * Use this method to set the current view.
                     * @param {ViewSelectorItem} viewSelectorItem The view selector item.
                     */
                    setCurrentView: function (viewSelectorItem) { return }
                })
            },
            /**
             * Interface for a view selector item. This object contains data that identifies a view. Use this as a parameter to
             * the ViewSelector.setCurrentView method.
             */
            ViewSelectorItem: function () {
                return CleanObject({
                    /**
                     * Returns a LookupValue that references this view.
                     * @returns The entity reference.
                     */
                    getEntityReference: function () { return Xrm.LookupValue() }
                })
            }
        }),
        /**
         * Interface for the form's record context, {@link Data.entity formContext.data.entity}
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity External Link: formContext.data.entity (Client API reference)}
         */
        Entity: function () {
            return CleanObject({
                /**
                 * Adds a handler to be called when the record is saved.
             * @param {function(EventContext context)} handler The handler.
                 */
                addOnSave: function (handler) { return },
                /**
                 * Gets an serialized-XML string representing data that will be passed to the server upon saving the record.
             * @returns {string} The XML in string format.
                 * @remarks This function does not work with Microsoft Dynamics CRM for tablets.
                 * @example "<account><name>Contoso</name><accountnumber>55555</accountnumber><telephone2>425
                 *          555-1234</telephone2></account>".
                 */
                getDataXml: function () { return '' },
                /**
                 * Gets entity's logical name.
             * @returns {string}  The logical name.
                 */
                getEntityName: function () { return '' },
                /**
                 * Gets a lookup value that references the record.
                 * @returns A lookup value that references the record.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference External Link: getEntityReference API Documentation}
                 */
                getEntityReference: function () { return Xrm.LookupValue() },
                /**
                 * Gets the record's unique identifier.
                 * @returns {string} The identifier, in Guid format.
                 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
                 */
                getId: function () { return '' },
                /**
                 * Gets a boolean value indicating whether the record has unsaved changes.
                 * @returns {boolean} true if there are unsaved changes, otherwise false.
                 */
                getIsDirty: function () { return true },
                /**
                 * Gets the record's primary attribute value.
                 * @returns {string} The primary attribute value.
                 * @remarks The value for this attribute is used when links to the record are displayed.
                 */
                getPrimaryAttributeValue: function () { return '' },
                /**
                 * Gets a boolean value indicating whether all of the entity data is valid.
                 * @returns {boolean} true if all of the entity data is valid; false otherwise.
                 */
                isValid: function () { return true },
                /**
                 * Removes the handler from the "on save" event.
             * @param {function(EventContext context)} handler The handler.
                 */
                removeOnSave: function (handler) { return },
                /**
                 * Saves the record with the given save mode.
                 * @param {EntitySaveMode} saveMode (Optional) the save mode to save, as either "saveandclose" or "saveandnew".  If no parameter is included in the method, the record will simply be saved.
                 * @remarks  When using quick create forms in the web application the saveandnew option is not
                 *           applied. It will always work as if saveandclose were used. Quick create forms in
                 *           Microsoft Dynamics CRM for tablets will apply the saveandnew behavior.
                 */
                save: function (saveMode) { return },
                /*
                  The collection of attributes for the record.
                   @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
                   @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                 */
                attributes: Xrm.Collection.ItemCollection()
            })
        },
        ProcessFlow: CleanObject({
            /**
             * Direction types for a process stage change event
             * Optional types: "Next" | "Previous"
             * @see {@link XrmEnum.StageChangeDirection}
             */
            StageChangeDirection: '',
            /**
             * Status for {@link ProcessFlow.Stage.getStatus Stage.getStatus()}.
             * Optional types: "active" | "inactive"
             * @see {@link XrmEnum.StageStatus}
             */
            StageStatus: '',
            /**
             * Status for {@link ProcessFlow.Process.getStatus Process.getStatus()}.
             * Optional types: "active" | "aborted" | "finished"
             * @see {@link XrmEnum.ProcessStatus}
             */
            ProcessStatus: '',
            /**
             * Interface for a CRM Business Process Flow instance.
             */
            Process: function () {
                return CleanObject({
                    /**
                     * Returns the unique identifier of the process.
                     * @returns {string} The identifier for this process, in GUID format.
                     * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
                     */
                    getId: function () { return '' },
                    /**
                     * Returns the name of the process.
                     * @returns {string} The name.
                     */
                    getName: function () { return '' },
                    /**
                     * Returns an collection of stages in the process.
                     * @returns The stages.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    getStages: function () { return Xrm.Collection.ItemCollection() },
                    /**
                     * Returns a boolean value to indicate if the process is rendered.
                     * @returns {boolean} true if the process is rendered, false if not.
                     */
                    isRendered: function () { return true }
                })
            },
            /**
             * Interface for CRM Business Process Flow stages.
             */
            Stage: function () {
                return CleanObject({
                    /**
                     * Returns an object with a getValue method which will return the integer value of the business process flow
                     * category.
                     * @returns The stage category. Qualify: 0 | Develop: 1 | Propose: 2 | Close: 3 | Identify: 4 | Research: 5 | Resolve: 6
                     */
                    getCategory: function () { return 0 },
                    /**
                     * Returns the logical name of the entity associated with the stage.
                     * @returns {string} The entity name.
                     */
                    getEntityName: function () { return '' },
                    /**
                     * Returns the unique identifier of the stage.
                     * @returns {string} The identifier of the Stage, in GUID format.
                     * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
                     */
                    getId: function () { return '' },
                    /**
                     * Returns the name of the stage.
                     * @returns {string} The name.
                     */
                    getName: function () { return '' },
                    /**
                     * Returns the status of the stage. "active" | "inactive"
                     * @returns {string} The status, either "active" or "inactive".
                     */
                    getStatus: function () { return Xrm.ProcessFlow.StageStatus },
                    /**
                     * Returns a collection of steps in the stage.
                     * @returns An array of Step.
                     */
                    getSteps: function () { return [Xrm.ProcessFlow.Step()] }
                })
            },
            Step: function () {
                return CleanObject({
                    /**
                     * Returns the logical name of the attribute associated to the step.
                     * @returns {string} The attribute.
                     * @remarks Some steps don’t contain an attribute value.
                     */
                    getAttribute: function () { return '' },
                    /**
                     * Returns the name of the step.
                     * @returns {string} The name.
                     */
                    getName: function () { return '' },
                    /**
                     * Returns whether the step is required in the business process flow.
                     * @returns {boolean} true if required, false if not.
                     * @remarks     Returns true if the step is marked as required in the Business Process Flow editor; otherwise, false.
                     *              There is no connection between this value and the values you can change in the formContext.data.entity
                     *              attribute RequiredLevel methods.
                     */
                    isRequired: function () { return true }
                })
            },
            /**
             * Interface for the formContext.data.process API.
             * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process External Link: formContext.data.process (Client API reference)}
             */
            ProcessManager: function () {
                return CleanObject({
                    /**
                     * Returns a Process object representing the active process.
                     * @returns current active process.
                     */
                    getActiveProcess: function () { return Xrm.ProcessFlow.Process() },
                    /**
                     * Set a Process as the active process.
                     * @param {string} processId The Id of the process to make the active process.
                     * @param {function(string status)} callbackFunction (Optional) a function to call when the operation is complete.
                     */
                    setActiveProcess: function (processId, callbackFunction) { return },
                    /**
                     * Returns all process instances for the entity record that the calling user has access to.
                     * @param {function(ProcessDictionary object)} callbackFunction (Optional) a function to call when the operation is complete.
                     */
                    getProcessInstances: function (callbackFunction) { return },
                    /**
                     * Sets a process instance as the active instance
                     * @param {string} processInstanceId The Id of the process instance to make the active instance.
                     * @param {function(string status)} callbackFunction (Optional) a function to call when the operation is complete.
                     */
                    setActiveProcessInstance: function (processInstanceId, callbackFunction) { return },
                    /**
                     * Returns a Stage object representing the active stage.
                     * @returns current active stage.
                     */
                    getActiveStage: function () { return Xrm.ProcessFlow.Stage() },
                    /**
                     * Set a stage as the active stage.
                     * @param {string} stageId the Id of the stage to make the active stage.
                     * @param {function(string status)} callbackFunction (Optional) a function to call when the operation is complete.
                     */
                    setActiveStage: function (stageId, callbackFunction) { return },
                    /**
                     * Use this method to get a collection of stages currently in the active path with methods to interact with the
                     * stages displayed in the business process flow control. The active path represents stages currently rendered in
                     * the process control based on the branching rules and current data in the record.
                     * @returns A collection of all completed stages, the currently active stage, and the predicted set of future stages
                     *          based on satisfied conditions in the branching rule. This may be a subset of the stages returned with
                     *          formContext.data.process.getActiveProcess because it will only include those stages which represent a valid
                     *          transition from the current stage based on branching that has occurred in the process.
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    getActivePath: function () { return Xrm.Collection.ItemCollection() },
                    /**
                     * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an
                     * entity.
                     * @param {function} callbackFunction The callback function must accept a parameter that contains an object with
                     *                         dictionary properties where the name of the property is the Id of the
                     *                         business process flow and the value of the property is the name of the
                     *                         business process flow.
                     *                         The enabled processes are filtered according to the user’s privileges. The
                     *                         list of enabled processes is the same ones a user can see in the UI if they
                     *                         want to change the process manually.
                     */
                    getEnabledProcesses: function (callbackFunction) { return },
                    /**
                     * Use this method to get the currently selected stage.
                     * @returns The currently selected stage.
                     */
                    getSelectedStage: function () { return Xrm.ProcessFlow.Stage() },
                    /**
                     * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the
                     * business process flow stage changes.
                     * @param {function(EventContext context)} handler The function will be added to the bottom of the event
                     *                handler pipeline. The execution context is automatically
                     *                set to be the first parameter passed to the event handler.
                     *                Use a reference to a named function rather than an
                     *                anonymous function if you may later want to remove the
                     *                event handler.
                     */
                    addOnStageChange: function (handler) { return },
                    /**
                     * Use this to add a function as an event handler for the OnProcessStatusChange event so that it will be called when the
                     * business process flow status changes.
                     * @param {function(ProcessStatus status)} handler The function will be added to the bottom of the event
                     *                handler pipeline. The execution context is automatically
                     *                set to be the first parameter passed to the event handler.
                     *                Use a reference to a named function rather than an
                     *                anonymous function if you may later want to remove the
                     *                event handler.
                     */
                    addOnProcessStatusChange: function (handler) { return },
                    /**
                     * Use this to add a function as an event handler for the OnStageSelected event so that it will be called
                     * when a business process flow stage is selected.
                     * @param {function(EventContext context)} handler The function will be added to the bottom of the event
                     *                handler pipeline. The execution context is automatically
                     *                set to be the first parameter passed to the event handler.
                     *                Use a reference to a named function rather than an
                         *                anonymous function if you may later want to remove the
                         *                event handler.
                         */
                    addOnStageSelected: function (handler) { return },
                    /**
                     * Use this to remove a function as an event handler for the OnProcessStatusChange event.
                     * @param {function(ProcessStatus status)} handler If an anonymous function is set using the addOnProcessStatusChange method it
                     *                cannot be removed using this method.
                     */
                    removeOnProcessStatusChange: function (handler) { return },
                    /**
                     * Use this to remove a function as an event handler for the OnStageChange event.
                     * @param {function(EventContext context)} handler If an anonymous function is set using the addOnStageChange method it
                     *                cannot be removed using this method.
                     */
                    removeOnStageChange: function (handler) { return },
                    /**
                     * Use this to remove a function as an event handler for the OnStageChange event.
                     * @param {function(EventContext context)} handler If an anonymous function is set using the addOnStageChange method it
                     *                cannot be removed using this method.
                     */
                    removeOnStageSelected: function (handler) { return },
                    /**
                     * Progresses to the next stage.
                     * @param {function(string status)} callbackFunction (Optional) A function to call when the operation is complete.
                     */
                    moveNext: function (callbackFunction) { return },
                    /**
                     * Moves to the previous stage.
                     * @param {function(string status)} callbackFunction (Optional) A function to call when the operation is complete.
                     */
                    movePrevious: function (callbackFunction) { return },
                    /**
                     * Use this method to get the unique identifier of the process instance
                     * @returns {string} The unique identifier of the process instance
                     */
                    getInstanceId: function () { return '' },
                    /**
                     * Use this method to get the name of the process instance
                     * @returns {string} The name of the process instance
                     */
                    getInstanceName: function () { return '' },
                    /**
                     * Use this method to get the current status of the process instance. "active" | "aborted" | "finished"
                     * @returns {string} The current status of the process
                     */
                    getStatus: function () { return Xrm.ProcessFlow.ProcessStatus },
                    /**
                     * Use this method to set the current status of the process instance
                     * @param {string} status The new status for the process "active" | "aborted" | "finished"
                     * @param {function(string status)} callbackFunction (Optional) a function to call when the operation is complete.
                     */
                    setStatus: function (status, callbackFunction) { return }
                })
            },
            /**
             * Called when method to get active processes is complete
             * @param status The result of the get active processes operation.
             * @remarks **Returns object with the following key-value pairs**:
             * * CreatedOn
             * * ProcessDefinitionID
             * * ProcessDefinitionName
             * * ProcessInstanceID
             * * ProcessInstanceName
             * * StatusCodeName
             */
            GetProcessInstancesDelegate: function (object) { },
            /**
             * Called when method to set active process is complete
             * @param {string} status The result of the set active process operation.
             * @remarks **Values returned are**:
             * * success        (The operation succeeded.)
             * * invalid        (The processInstanceId isn’t valid or the process isn’t enabled.)
             */
            SetProcessInstanceDelegate: function (status) { },
            /**
             * Called when process change methods have completed.
             * @param {string} status The result of the process change operation.
             * @remarks **Values returned are**:
             * * success        (The operation succeeded.)
             * * crossEntity    (The previous stage is for a different entity.)
             * * beginning      (The active stage is the first stage of the active path.)
             * * invalid        (The operation failed because the selected stage isn’t the same as the active stage.)
             * * unreachable    (The stage exists on a different path.)
             */
            ProcessCallbackDelegate: function (status) { },
            /**
             * Called when process set status method has completed.
             * @param {string} status The new status of the process instance: active, aborted, or finished
             */
            ProcessSetStatusDelegate: function (status) { },
            /**
             * Represents a key-value pair, where the key is the Process Flow's ID, and the value is the name thereof.
             */
            ProcessDictionary: function () {
                return CleanObject({
                })
            }
        }),
        /**
         * Interface for a user attribute privilege.
         */
        Privilege: function () {
            return CleanObject({
                /**
                 * True if the user can read.
                 */
                canRead: true,
                /**
                     * True if the user can update.
                     */
                canUpdate: true,
                /**
                 * True if the user can create.
                 */
                canCreate: true
            })
        },
        /**
         * An definition module for URL-based, CRM component parameters.
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
         */
        Url: CleanObject({
            /**
             * Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
             * Optional types: "true" | "false"
             * @see {@link XrmEnum.CmdBarDisplay}
             */
            CmdBarDisplay: '',
            /**
             * Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
             * Optional types: "entity" | "off" | "on"
             * @see {@link XrmEnum.NavBarDisplay}
             */
            NavBarDisplay: '',
            /**
             * Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
             * Optional types: "filter" | "run"
             * @see {@link XrmEnum.ReportAction}
             */
            ReportAction: '',
            /**
             * Interface for defining parameters on a request to open a form with main.aspx (as with
             * window.open). Useful for parsing the keys and values into a string of the format:
             * "&key=value".
             * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
             * @remarks  A member for "pagetype" is not provided.  The value "entityrecord" is required in
             *           the URL, for forms. Example:  "pagetype=entityrecord"
             */
            FormOpenParameters: function () {
                return CleanObject({
                    /**
                     * The logical name of the entity.
                     */
                    etn: '',
                    /**
                     * Additional parameters can be provided to the request. This can only be used to provide
                     * default field values for the form, or pass data to custom parameters that have been
                     * customized for the form.  See example below for setting the selected form.
                     * @example Example:  encodeURIComponent("formid={8c9f3e6f-7839-e211-831e-00155db7d98f}");
                     */
                    extraqs: '',
                    /**
                     * Controls whether the command bar is displayed.
                     * @remarks **Accepted values are**:
                     * * "true"    (The command bar is displayed.)
                     * * "false"   (The command bar is not displayed.)
                     */
                    cmdbar: Xrm.Url.CmdBarDisplay,
                    /**
                     * Controls whether the Navigation bar is displayed on the form.
                     * @remarks **Accepted values are**:
                     * * "on"      (The navigation bar is displayed.)
                     * * "off"     (The navigation bar is not displayed.)
                     * * "entity"  (On an entity form, only the navigation options for related entities are available.)
                     */
                    navbar: Xrm.Url.NavBarDisplay
                })
            },
            /**
             * Interface for defining parameters on a request to open a view with main.aspx (as with
             * window.open). Useful for parsing the keys and values into a string of the format:
             * "&key=value".
             * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
             * @remarks  A member for "pagetype" is not provided.  The value "entitylist" is required in
             *           the URL, for views. Example:  "pagetype=entitylist"
             */
            ViewOpenParameters: function () {
                return CleanObject({
                    /**
                     * The logical name of the entity.
                     */
                    etn: '',
                    /**
                     * The unique identifier of a view, in Guid format, which is valid for the entity described by
                     * {@link etn}.
                     */
                    viewid: '',
                    /**
                     * The type of view identified by {@link viewid}.
                     * @remarks **Accepted values are**:
                     * * 1039    System View
                     * * 4230    User View.
                     */
                    viewtype: 0,
                    /**
                     * Controls whether the command bar is displayed.
                     * @remarks **Accepted values are**:
                     * * "true"    (The command bar is displayed.)
                     * * "false"   (The command bar is not displayed.)
                     */
                    cmdbar: Xrm.Url.CmdBarDisplay,
                    /**
                     * Controls whether the Navigation bar is displayed on the form.
                     * @remarks **Accepted values are**:
                     * * "on"      (The navigation bar is displayed.)
                     * * "off"     (The navigation bar is not displayed.)
                     * * "entity"  (On an entity form, only the navigation options for related entities are available.)
                 */
                    navbar: Xrm.Url.NavBarDisplay
                })
            },
            /**
             * Interface for defining parameters of a request to open a dialog with rundialog.aspx (as with
             * window.open).  Useful for parsing the keys and values into a string of the format:
             * "&key=value".
             * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
             */
            DialogOpenParameters: function () {
                return CleanObject({
                    /**
                     * The unique identifier of the dialog, in Guid format, which is valid for the entity described
                     * by: {@link EntityName}
                     */
                    DialogId: '',
                    /**
                     * The logical name of the entity.
                     */
                    EntityName: '',
                    /**
                     * The unique identifier for the targeted record.
                     */
                    ObjectId: ''
                })
            },
            /**
             * Interface for defining parameters of a request to open a report with viewer.apsx (as with
             * window.open).  Useful for parsing out the keys and values into a string of the format:
             * "&key=value"
             *
             * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
             */
            ReportOpenParameters: function () {
                return CleanObject({
                    /**
                     * The action to perform, as either "run" or "filter".
                     * @remarks **Actions**:
                     * * "run"       Executes the report with default filters.
                     * * "filter"    Presents the user with the filter editor, and a "Run Report" button.
                     */
                    action: Xrm.Url.ReportAction,
                    /**
                     * The file name of the report.  For out-of-box reports, this parameter enables context-sensitive
                     * help.
                     */
                    helpID: '',
                    /**
                     * The unique identifier, held in the report's 'reportid' attribute, in Guid format.
                     */
                    id: ''
                })
            }
        }),
        /**
         * The Xrm.Utility API
         *
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility External Link: Xrm.Utility (Client API reference)}
         */
        Utility: CleanObject({
            /**
             * Interface use to provide parameters when opening new entiy forms
             */
            OpenParameters: function () {
                return CleanObject({
                    /**
                     * Additional parameters can be provided to the request, by overloading
                     * this object with additional key and value pairs. This can only be used
                     * to provide default field values for the form, or pass data to custom
                     * parameters that have been customized for the form.
                     */
                })
            },
            /**
             * Interface for defining parameters on a Xrm.Utility.openEntityForm() request.
             */
            FormOpenParameters: function () {
                return CleanObject(Object.assign(Xrm.Utility.OpenParameters(), {
                    /**
                     * The identifier of the form to use, when several are available.
                     */
                    formid: '',
                    /**
                    * Controls whether the Navigation bar is displayed on the form.
                    * @remarks **Accepted values are**:
                    * * "on"      (The navigation bar is displayed.)
                    * * "off"     (The navigation bar is not displayed.)
                    * * "entity"  (On an entity form, only the navigation options for related entities are available.)
                    */
                    navbar: Xrm.Url.NavBarDisplay,
                    /**
                     * Controls whether the command bar is displayed.
                     * @remarks **Accepted values are**:
                     * * "true"    (The command bar is displayed.)
                     * * "false"   (The command bar is not displayed.)
                     */
                    cmdbar: Xrm.Url.CmdBarDisplay
                }));
            },
            /**
             * Interface for window options.
             */
            WindowOptions: function () {
                return CleanObject({
                    /**
                     * Direct the form to open in a new window.
                     */
                    openInNewWindow: true
                })
            }
        }),
        /**
         * Namespace to hold Xrm.Navigation related types
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation External Link: Xrm.Navigation (Client API reference)}
         */
        Navigation: CleanObject({
            AlertStrings: function () {
                return CleanObject({
                    /**
                     * (Optional) The confirm button label.If you do not specify the button label, OK is used as the button label.
                     */
                    confirmButtonLabel: '',
                    /**
                     *  The message to be displyed in the alert dialog.
                     */
                    text: ''
                })
            },
            ConfirmStrings: function () {
                return CleanObject({
                    /**
                     * (Optional) The cancel button label. If you do not specify the cancel button label, Cancel is used as the button label.
                     */
                    cancelButtonLabel: '',
                    /**
                     * (Optional) The confirm button label.If you do not specify the button label, OK is used as the button label.
                     */
                    confirmButtonLabel: '',
                    /**
                     * (Optional) The subtitle to be displayed in the confirmation dialog.
                     */
                    subtitle: '',
                    /**
                     * (Optional) The title to be displyed in the confirmation dialog.
                     */
                    title: '',
                    /**
                     * The message to be displyed in the alert dialog.
                     */
                    text: ''
                })
            },
            DialogSizeOptions: function () {
                return CleanObject({
                    /**
                     * Height of the alert dialog in pixels.
                     */
                    height: 0,
                    /**
                     * Width of the alert dialog pixels.
                     */
                    width: 0
                })
            },
            OpenWebresourceOptions: function () {
                return CleanObject(Object.assign(Xrm.Navigation.DialogSizeOptions(), {
                    /**
                     * Indicates whether to open the web resource in a new window.
                     */
                    openInNewWindow: true
                }));
            },
            /**
             * An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
             */
            ConfirmResult: function () {
                return CleanObject({
                    /**
                     * true if the confirm button was clicked to close the dialog.
                     */
                    confirmed: true
                })
            },
            OpenFormResult: function () {
                return CleanObject({
                    /**
                     * Identifies the record displayed or created
                     */
                    savedEntityReference: [Xrm.LookupValue()]
                })
            },
            /**
             * Details to show in the Error dialog
             */
            ErrorDialogOptions: function () {
                return CleanObject({
                    /**
                     * Details about the error. When you specify this, the Download Log File button is available in the error message,
                     * and clicking it will let users download a text file with the content specified in this attribute.
                     */
                    details: '',
                    /**
                     * The error code. If you just set errorCode, the message for the error code is automatically
                     * retrieved from the server and displayed in the error dialog.
                     * If you specify an invalid errorCode value, an error dialog with a default error message is displyed.
                     */
                    errorCode: 0,
                    /**
                     *  The message to be displayed in the error dialog.
                     */
                    message: ''
                })
            },
            FileDetails: function () {
                return CleanObject({
                    /**
                     * Contents of the file.
                     */
                    fileContent: '',
                    /**
                     * Name of the file.
                         */
                    fileName: '',
                    /**
                     * Size of the file in KB.
                     */
                    fileSize: 0,
                    /**
                     * String. MIME type of the file.
                     */
                    mimeType: ''
                })
            },
            /**
             * Entity form options for opening the form
             */
            EntityFormOptions: function () {
                return CleanObject({
                    /**
                     * Indicates whether to display the command bar.If you do not specify this parameter, the command bar is displayed by default.
                     */
                    cmdbar: true,
                    /**
                     * Designates a record that will provide default values based on mapped attribute values.The lookup object has the following String properties: entityType, id, and name (optional).
                         */
                    createFromEntity: Xrm.LookupValue(),
                    /**
                     * ID of the entity record to display the form for.
                     */
                    entityId: '',
                    /**
                     * Logical name of the entity to display the form for.
                     */
                    entityName: '',
                    /**
                     * ID of the form instance to be displayed.
                     */
                    formId: '',
                    /**
                     * Height of the form window to be displayed in pixels.
                     */
                    height: 0,
                    /**
                     * Undocumented at this time
                     */
                    isCrossEntityNavigate: true,
                    /**
                     * Undocumented at this time
                     */
                    isOfflineSyncError: true,
                    /**
                     * Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the sitemap.Valid vlaues are: "on", "off", or "entity".
                     * * on: The navigation bar is displayed.This is the default behavior if the navBar parameter is not used.
                     * * off: The navigation bar is not displayed.People can navigate using other user interface elements or the back and forward buttons.
                     * * entity: On an entity form, only the navigation options for related entities are available.After navigating to a related entity, a back button is displayed in the navigation bar to allow returning to the original record.
                     */
                    navBar: Xrm.Url.NavBarDisplay,
                    /**
                     * Indicates whether to display form in a new window.
                     */
                    openInNewWindow: true,
                    /**
                     * Specify one of the following values for the window position of the form on the screen:
                     * * 1:center
                     * * 2:side
                     */
                    windowPosition: 0,
                    /**
                     * ID of the business process to be displayed on the form.
                     */
                    processId: '',
                    /**
                     * ID of the business process instance to be displayed on the form.
                     */
                    processInstanceId: '',
                    /**
                     * Define a relationship object to display the related records on the form.
                     */
                    relationship: Xrm.Navigation.Relationship(),
                    /**
                     * ID of the selected stage in business process instance.
                     */
                    selectedStageId: '',
                    /**
                     * Indicates whether to open a quick create form.
                    */
                    useQuickCreateForm: true,
                    /**
                     * Width of the form window to be displayed in pixels.
                     */
                    width: 0
                })
            },
            Relationship: function () {
                return CleanObject({
                    /**
                     * Name of the attribute used for relationship.
                     */
                    attributeName: '',
                    /**
                     * Name of the relationship.
                     */
                    name: '',
                    /**
                     * Name of the navigation property for this relationship.
                     */
                    navigationPropertyName: '',
                    /**
                     * Relationship type.Specify one of the following values:
                     * * 0:OneToMany
                     * * 1:ManyToMany
                     */
                    relationshipType: 0,
                    /**
                     * Role type in relationship.Specify one of the following values:
                     * * 1:Referencing
                     * * 2:AssociationEntity
                     */
                    roleType: 0
                })
            }
        }),
        /**
         * Interface for the Xrm.Navigation API
         */
        _Navigation: function () {
            return CleanObject({
                /**
                 * Displays an alert dialog containing a message and a button.
                 * @param {Navigation.AlertStrings} alertStrings The strings to be used in the alert dialog.
                 * @param {Navigation.DialogSizeOptions} alertOptions The height and width options for alert dialog
                 */
                openAlertDialog: function (alertStrings, alertOptions) { return Xrm.Async.PromiseLike() },
                /**
                 * Displays a confirmation dialog box containing a message and two buttons.
                 * @param {Navigation.ConfirmStrings} confirmStrings The strings to be used in the confirm dialog.
                 * @param {Navigation.DialogSizeOptions} confirmOptions The height and width options for alert dialog
                 */
                openConfirmDialog: function (confirmStrings, confirmOptions) { return Xrm.Async.PromiseLike() },
                /**
                 * Displays an error dialog.
                 * @param confirmStrings The strings to be used in the confirm dialog.
                 * @param confirmOptions The height and width options for alert dialog
                 */
                openErrorDialog: function (errorOptions) { return Xrm.Async.PromiseLike() },
                /**
                 * Opens a file.
                 */
                openFile: function (file, openFileOptions) { return },
                /**
                 * Opens an entity form or a quick create form.
                 */
                openForm: function (entityFormOptions, formParameters) { return Xrm.Async.PromiseLike() },
                /**
                 * Opens a URL, including file URLs.
                 * @param {string} url URL to open.
                 * @param {Navigation.DialogSizeOptions} openUrlOptions Options to open the URL
                 */
                openUrl: function (url, openUrlOptions) { return },
                /**
                 * Opens an HTML web resource.
                 * @param {string} webResourceName Name of the HTML web resource.
                 * @param {Navigation.OpenWebresourceOptions} windowOptions (Optional) Window options for opening the web resource.
                 *                                                 It is advised to use encodeURIcomponent() to encode the value.
                 */
                openWebResource: function (webResourceName, windowOptions, data) { return }
            })
        },
        /**
         * Namespace to hold the Metadata types
         */
        Metadata: CleanObject({
            /**
             * Types returned by a call to getEntityMetadata
             */
            EntityMetadata: function () {
                return CleanObject({
                    ActivityTypeMask: 0,
                    /**
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    Attributes: Xrm.Collection.StringIndexableItemCollection,
                    AutoRouteToOwnerQueue: true,
                    CanEnableSyncToExternalSearchIndex: true,
                    CanBeInManyToMany: true,
                    CanBePrimaryEntityInRelationship: true,
                    CanBeRelatedEntityInRelationship: true,
                    CanCreateAttributes: true,
                    CanCreateCharts: true,
                    CanCreateForms: true,
                    CanCreateViews: true,
                    CanModifyAdditionalSettings: true,
                    CanTriggerWorkflow: true,
                    Description: Xrm.Metadata.Label(),
                    DisplayCollectionName: Xrm.Metadata.Label(),
                    DisplayName: Xrm.Metadata.Label(),
                    EntityColor: '',
                    EntitySetName: '',
                    IconLargeName: '',
                    IconMediumName: '',
                    IconSmallName: '',
                    IsActivity: true,
                    IsActivityParty: true,
                    IsAuditEnabled: true,
                    IsAvailableOffline: true,
                    IsBPFEntity: true,
                    IsChildEntity: true,
                    IsConnectionsEnabled: true,
                    IsCustomEntity: true,
                    IsCustomizable: true,
                    IsDocumentManagementEnabled: true,
                    IsDuplicateDetectionEnabled: true,
                    IsEnabledForCharts: true,
                    IsOneNotIntegrationEnabled: true,
                    IsOptimisitcConcurrencyEnabled: true,
                    IsQuickCreateEnabled: true,
                    IsImportable: true,
                    IsIntersect: true,
                    IsMailMergeEnabled: true,
                    IsManaged: true,
                    IsMappable: true,
                    IsReadingPaneEnabled: true,
                    IsRenameable: true,
                    IsStateModelAware: true,
                    IsValidForAdvancedFind: true,
                    IsValidForQueue: true,
                    IsVisibleInMobileClient: true,
                    LogicalCollectionName: '',
                    LogicalName: '',
                    ObjectTypeCode: 0,
                    OwnershipTypeCode: 0,
                    PrimaryIdAttribute: '',
                    PrimaryNameAttribute: '',
                    RecurrenceBaseEntityLogicalName: '',
                    PrimaryImageAttribute: ''
                })
            },
            /**
             * Type to hold Labels as part of the EntityMetadata
             */
            Label: function () {
                return CleanObject({
                    /**
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    LocalizedLabels: [Xrm.Metadata.LocalizedLabel()],
                    UserLocalizedLabel: Xrm.Metadata.LocalizedLabel()
                })
            },
            /**
             * Type to hold a Label as part of the EntityMetadata
             */
            LocalizedLabel: function () {
                return CleanObject({
                    Label: '',
                    LanguageCode: 0
                })
            },
            /**
             * Type to hold the Attribute metadata as part of the EntityMetadata
             */
            AttributeMetadata: function () {
                return CleanObject({
                    defaultFormValue: 0,
                    /**
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    options: [],
                    logicalName: '',
                    displayName: '',
                    attributeType: 0,
                    entityLogicalName: '',
                    /**
                     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
                     */
                    optionSet: [Xrm.Metadata.OptionMetadata()]
                })
            },
            /**
             * Type to hold the optionset metadata as part of the EntityMetadata
             */
            OptionMetadata: function () {
                return CleanObject({
                    Value: 0,
                    Color: '',
                    IsManaged: true,
                    ExternalValue: '',
                    MetadataId: '',
                    HasChanged: true,
                    State: 0,
                    TransitionData: '',
                    Label: Xrm.Metadata.Label(),
                    Description: Xrm.Metadata.Label()
                })
            }
        }),
        /**
         * Namespace to hold Xrm.Device related types
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device External Link: Xrm.Device (Client API reference)}
         */
        Device: CleanObject({
            /**
             * Xrm.Device.captureAudio/captureImage/captureVideo response
             */
            CaptureFileResponse: function () {
                return CleanObject({
                    /**
                     * Base64 encoded contents of the file.
                     */
                    fileContent: '',
                    /**
                     * Name of the audio file.
                         */
                    fileName: '',
                    /**
                     * Size of the file in KB.
                 */
                    fileSize: 0,
                    /**
                     * File MIME type.
                     */
                    mimeType: ''
                })
            },
            /**
             * Options for Xrm.Device.captureImage
             */
            CaptureImageOptions: function () {
                return CleanObject({
                    /**
                     * Indicates whether to edit the image before saving.
                     */
                    allowEdit: true,
                    /**
                     * Height of the image to capture.
                         */
                    height: 0,
                    /**
                     * Indicates whether to capture image using the front camera of the device.
                     */
                    preferFrontCamera: true,
                    /**
                     * Quality of the image file in percentage. Number.
                 */
                    quality: 0,
                    /**
                     * Width of the image to capture
                     */
                    width: 0
                })
            },
            /**
             * Interface for Xrm.Device.getCurrentPosition response
             */
            GetCurrentPositionResponse: function () {
                return CleanObject({
                    /**
                     * Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed.
                     */
                    coords: '',
                    /**
                     * Represents the time when the object was acquired and is represented as DOMTimeStamp.
                     */
                    timestamp: 0
                })
            },
            /**
             * Posible file types for Xrm.Device.pickFile options
             * Optional types: "audio" | "video" | "image"
             * @see {@link XrmEnum.DevicePickFileType}
                 */
            PickFileTypes: '',
            /**
             * Interface for Xrm.Device.pickFile options
             */
            PickFileOptions: function () {
                return CleanObject({
                    /**
                     * Image file types to select.
                     */
                    accept: Xrm.Device.PickFileTypes,
                    /**
                     * Indicates whether to allow selecting multiple files.
                     */
                    allowMultipleFiles: true,
                    /**
                     * Maximum size of the files(s) to be selected.
                     */
                    maximumAllowedFileSize: 0
                })
            }
        }),
        /**
         * Interface for Xrm.Device API
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device External Link: Xrm.Device (Client API reference)}
         */
        _Device: function () {
            return CleanObject({
                /**
                 * Invokes the device microphone to record audio.
                 * @returns On success, returns Base64 encoded file
                 */
                captureAudio: function () { return Xrm.Async.PromiseLike() },
                /**
                 * Invokes the device camera to capture an image.
                 * @returns On success, returns Base64 encoded file
                 */
                captureImage: function (imageOptions) { return Xrm.Async.PromiseLike() },
                /**
                 * Invokes the device camera to capture video.
                 * @returns On success, returns Base64 encoded file
                 */
                captureVideo: function () { return Xrm.Async.PromiseLike() },
                /**
                 * Invokes the device camera to scan the barcode information, such as a product number.
                 * @returns On success, Barcode value is returned as a String
                 */
                getBarcodeValue: function () { return Xrm.Async.PromiseLike() },
                /**
                 * Returns the current location using the device geolocation capability.
                 * @returns On success, returns current geolocation information
                 */
                getCurrentPosition: function () { return Xrm.Async.PromiseLike() },
                /**
                 * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
                 * @returns On success, returns an array of files
                 */
                pickFile: function (pickFileOptions) { return Xrm.Async.PromiseLike() }
            })
        },
        /**
         * Interface for Xrm.Encoding API
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding External Link: Xrm.Encoding (Client API reference)}
         */
        Encoding: function () {
            return CleanObject({
                /**
                 * Applies attribute encoding to a string.
                 * @param {string} arg String to be encoded.
                 * @returns Encoded string.
                 */
                xmlAttributeEncode: function (arg) { return '' },
                /**
                 * Applies XML encoding to a string.
                 * @param {string} arg String to be encoded.
                 * @returns Encoded string.
                 */
                xmlEncode: function (arg) { return '' }
            })
        },
        /**
         * Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi External Link: Xrm.WebApi (Client API reference)}
         */
        WebApi: function () {
            return CleanObject(Object.assign(Xrm.WebApiOffline(), {
                /**
                 * Returns a boolean value indicating whether an entity is offline enabled.
                 * @param {string} entityLogicalName    Logical name of the entity. For example: "account".
                 * @returns true if the entity is offline enabled; otherwise false.
                 */
                isAvailableOffline: function (entityLogicalName) { return true },
                /**
                 * Provides methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement when connected to the Customer Engagement server (online mode).
                 */
                online: Xrm.WebApiOnline(),
                /**
                 * Provides methods to create and manage records in the Dynamics 365 Customer Engagement mobile clients while working in the offline mode.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/offline}
                 */
                offline: Xrm.WebApiOffline()
            }));
        },
        /**
         * Interface for the Xrm.WebApi.online API
         * Execute and ExecuteMultiple are only available when online, not offline.
         */
        WebApiOnline: function () {
            return CleanObject(Object.assign(Xrm.WebApiOffline(), {
                /**
                 * Execute a single action, function, or CRUD operation.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/execute External Link: execute (Client API reference)}
                 * @param {any} request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
                 * @remarks The object exposes a getMetadata method that lets you define the metadata for the action, function or CRUD request you want to execute.<BR>
                 * **The getMetadata method has the following parameters**:
                 *   - boundParameter: (Optional) String. The name of the bound parameter for the action or function to execute.
                 *       * Specify undefined if you are executing a CRUD request.
                 *       * Specify null if the action or function to execute is not bound to any entity.
                 *       * Specify entity logical name or entity set name in case the action or function to execute is bound to one.
                 *   - operationName: (Optional). String. Name of the action, function, or one of the following values if you are executing a CRUD request: "Create", "Retrieve", "RetrieveMultiple", "Update", or "Delete".
                 *   - operationType: (Optional). Number. Indicates the type of operation you are executing; specify one of the following values:
                 *       * 0: Action
                 *       * 1: Function
                 *       * 2: CRUD
                 *   - parameterTypes: Object. The metadata for parameter types. The object has the following attributes:
                 *   - enumProperties: (Optional) Object. The metadata for enum types. The object has two string attributes: name and value
                 *   - structuralProperty: Number. The category of the parameter type. Specify one of the following values:
                 *       * 0: Unknown
                 *       * 1: PrimitiveType
                 *       * 2: ComplexType
                 *       * 3: EnumerationType
                 *       * 4: Collection
                 *       * 5: EntityType
                 *   - typeName: String. The fully qualified name of the parameter type.
                 */
                execute: function (request) { return Xrm.Async.PromiseLike() },
                /**
                 * Execute a collection of action, function, or CRUD operations.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/executemultiple External Link: executeMultiple (Client API reference)}
                 * @param {any[]} request   An array of one of one of the following types:
                 *    -objects where each object is an action, function, or CRUD request that you want to execute
                 *        * against the Web API endpoint. Each object exposes a getMetadata method that lets you define
                 *        the metadata for the action, function or CRUD request you want to execute. This is the same
                 *        object that you pass in the execute method. For information about the object, see execute.
                 *    -change set (an array of objects), where each object in the change set is as defined above.
                 *        * In this case, all the request objects specified in the change set will get executed in a
                 *        transaction.
                 */
                executeMultiple: function (request) { return Xrm.Async.PromiseLike() }
            }));
        },
        /**
         * Interface for the Xrm.WebApi.offline API
         */
        WebApiOffline: function () {
            return CleanObject({
                /**
                 * Creates an entity record
                 * @param {string} entityLogicalName Logical name of the entity you want to create. For example: "account".
                 * @param {any} record A JSON object defining the attributes and values for the new entity record.
                 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/createrecord External Link: createRecord (Client API reference)}
                     */
                createRecord: function (entityLogicalName, record) { return Xrm.Async.PromiseLike() },
                /**
                 * Deletes an entity record.
                 * @param {string} entityLogicalName The entity logical name of the record you want to delete. For example: "account".
                 * @param {string} id GUID of the entity record you want to delete.
                 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/deleterecord External Link: deleteRecord (Client API reference)}
                 */
                deleteRecord: function (entityLogicalName, id) { return Xrm.Async.PromiseLike() },
                /**
                 * Retrieves an entity record.
                 * @param {string} entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
                 * @param {string} id GUID of the entity record you want to retrieve.
                 * @param {string} options (Optional) OData system query options, $select and $expand, to retrieve your data.
                 * - Use the $select system query option to limit the properties returned by including a comma-separated
                 *   list of property names. This is an important performance best practice. If properties aren’t
                 *   specified using $select, all properties will be returned.
                 * - Use the $expand system query option to control what data from related entities is returned. If you
                 *   just include the name of the navigation property, you’ll receive all the properties for related
                 *   records. You can limit the properties returned for related records using the $select system query
                 *   option in parentheses after the navigation property name. Use this for both single-valued and
                 *   collection-valued navigation properties.
                 * - You can also specify multiple query options by using & to separate the query options.
                 * @example <caption>options example:</caption>
                 * options: $select=name&$expand=primarycontactid($select=contactid,fullname)
                 * @returns On success, returns a promise containing a JSON object with the retrieved attributes and their values.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrieverecord External Link: retrieveRecord (Client API reference)}
                 */
                retrieveRecord: function (entityLogicalName, id, options) { return Xrm.Async.PromiseLike() },
                /**
                 * Retrieves a collection of entity records.
                 * @param {string} entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
                 * @param {string} options (Optional) OData system query options or FetchXML query to retrieve your data.
                 * * Following system query options are supported: $select, $top, $filter, $expand, and $orderby.
                 * * To specify a FetchXML query, use the fetchXml attribute to specify the query.
                 * * NOTE: You must always use the $select system query option to limit the properties returned for an entity
                 * record by including a comma-separated list of property names. This is an important performance best practice.
                 * * If properties aren’t specified using $select, all properties will be returned.
                 * * You can specify multiple system query options by using & to separate the query options.
                 * @param {number} maxPageSize (Optional) Specify a positive number that indicates the number of entity records to be returned per page.
                 * * If you do not specify this parameter, the default value is passed as 5000. If the number of records being retrieved is more than the specified
                 * maxPageSize value, nextLink attribute in the returned promise object will contain a link to retrieve the next set of entities.
                 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrievemultiplerecords External Link: retrieveMultipleRecords (Client API reference)}
                 */
                retrieveMultipleRecords: function (entityLogicalName, options, maxPageSize) { return Xrm.Async.PromiseLike() },
                /**
                 * Updates an entity record.
                 * @param {string} entityLogicalName The entity logical name of the record you want to update. For example: "account".
                 * @param {string} id GUID of the entity record you want to update.
                 * @param {any} Data A JSON object containing key: value pairs, where key is the property of the entity and value is the value of the property you want update.
                 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
                 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/updaterecord External Link: updateRecord (Client API reference)}
                 */
                updateRecord: function (entityLogicalName, id, data) { return Xrm.Async.PromiseLike() }
            })
        },
        /**
         * Interface for the Promise error response arguments
         */
        ErrorResponse: function () {
            return CleanObject({
                errorCode: 0,
                message: ''
            })
        },
        /**
         * Interface for the WebAPI RetrieveMultiple request response
         */
        RetrieveMultipleResult: function () {
            return CleanObject({
                /**
                 * An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values as key: value pairs. The Id of the entity record is retrieved by default.
                 */
                entities: [''],
                /**
                 * If the number of records being retrieved is more than the value specified in the maxPageSize parameter, this attribute returns the URL to return next set of records.
                 */
                nextLink: ''
            })
        },
        /**
         * Interface for the WebAPI Execute request response
         */
        ExecuteResponse: function () {
            return CleanObject({
                /**
                 * (Optional). Object.Response body.
                 */
                body: '',
                /**
                 * Response headers.
                     */
                headers: '',
                /**
                 * Indicates whether the request was successful.
             */
                ok: true,
                /**
                 * Numeric value in the response status code.
                 * @example 200
                 */
                status: 0,
                /**
                     * Description of the response status code.
                     * @example "OK"
                     */
                statusText: '',
                /**
                 * Response type.Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
             */
                type: '',
                /**
                 * Request URL of the action, function, or CRUD request that was sent to the Web API endpoint.
                 */
                url: ''
            })
        }
    })
 
    const XrmEnum = {
        /**
         * Enumeration of entity form states/types.
         */
        FormType: {
            Undefined: 0,
            Create: 1,
            Update: 2,
            ReadOnly: 3,
            Disabled: 4,
            BulkEdit: 6,
            /**
             * @deprecated QuickCreate has been deprecated
             */
            QuickCreate: 5,
            /**
             * @deprecated ReadOptimized has been deprecated.
             */
            ReadOptimized: 11
        },
        /**
         * Enumeration of entity form save modes.
         */
        SaveMode: {
            Save: 1,
            SaveAndClose: 2,
            SaveAndNew: 59,
            AutoSave: 70,
            SaveAsCompleted: 58,
            Deactivate: 5,
            Reactivate: 6,
            Assign: 47,
            Send: 7,
            Qualify: 16,
            Disqualify: 15
        },
        /**
         * Enumeration of stage categories.
         */
        StageCategory: {
            Qualify: 0,
            Develop: 1,
            Propose: 2,
            Close: 3,
            Identify: 4,
            Research: 5,
            Resolve: 6
        },
        /**
         * Enumeration of grid control context resolutions.
         */
        GridControlContext: {
            Unknown: 0,
            RibbonContextForm: 1,
            RibbonContextListing: 2,
            FormContextUnrelated: 3,
            FormContextRelated: 4
        },
        /**
         * An enumeration for view types.
         */
        ViewType: {
            SystemView: 1039,
            UserView: 4230
        },
        /**
         * An enumeration for Attribute Type metadata
         */
        AttributeTypeCode: {
            Boolean: 0,
            Customer: 1,
            DateTime: 2,
            Decimal: 3,
            Double: 4,
            Integer: 5,
            Lookup: 6,
            Memo: 7,
            Money: 8,
            Owner: 9,
            PartyList: 10,
            Picklist: 11,
            State: 12,
            Status: 13,
            String: 14,
            Uniqueidentifier: 15,
            CalendarRules: 16,
            Virtual: 17,
            BigInt: 18,
            ManagedProperty: 19,
            EntityName: 20
        },
        /**
         * An enumeration for Attribute required level metadata
         */
        AttributeRequiredLevel: {
            None: 0,
            SystemRequired: 1,
            ApplicationRequired: 2,
            Recommended: 3
        },
        /**
         * An enumeration for open file dialog options
         */
        OpenFileOptions: {
            Open: 1,
            Save: 2
        },
        /**
         * An enumeration for window positions when opening a new window
         */
        WindowPositions: {
            Center: 1,
            Side: 2
        },
        /**
         * An enumeration for Relationship Type Metadata
         */
        RelationshipType: {
            OneToMany: 0,
            ManyToMany: 1
        },
        /**
         * An enumeration for Relationship Role Type Metadata
         */
        RoleType: {
            Referencing: 1,
            AssociationEntity: 2
        },
        ClientFormFactor: {
            Unknown: 1,
            Desktop: 2,
            Tablet: 3,
            Phone: 4
        },
        /**
         * Constant Enum: Client Types for {@link ClientContext.getClient clientContext.getClient()}.
         * @see {@link Xrm.Client}
         */
        Client: {
            Web: "Web",
            Outlook: "Outlook",
            Mobile: "Mobile",
            UnifiedServiceDesk: "UnifiedServiceDesk",
            USD: "UnifiedServiceDesk"
        },
        /**
         * Constant Enum: Client States for {@link ClientContext.getClientState clientContext.getClientState()}.
         * @see {@link Xrm.ClientState}
         */
        ClientState: {
            Online: "Online",
            Offline: "Offline"
        },
        /**
         * Constant Enum: Display States for setDisplayState() on {@link Controls.ProcessControl.setDisplayState Processes} and {@link Controls.Tab.setDisplayState Tabs}.
         * @see {@link Xrm.DisplayState}
         */
        DisplayState: {
            Expanded: "expanded",
            Collapsed: "collapsed"
        },
        /**
         * Constant Enum: {@link Entity.save Entity} Save Modes
         * @see {@link Xrm.EntitySaveMode}
         * @see {@link Entity}
         * @see {@link Entity.save}
         */
        EntitySaveMode: {
            SaveAndClose: "saveandclose",
            SaveAndNew: "saveandnew"
        },
        /**
         * Constant Enum: Form Notification Levels for {@link Ui.setFormNotification formContext.ui.setFormNotification()}.
         * @see {@link Xrm.FormNotificationLevel}
         */
        FormNotificationLevel: {
            Error: "ERROR",
            Info: "INFO",
            Warning: "WARNING"
        },
        /**
         * Constant Enum: Submit Modes for {@link Attributes.Attribute.setSubmitMode} Attributes.Attribute.setSubmitMode().
         * @see {@link Xrm.SubmitMode}
         */
        SubmitMode: {
            Always: "always",
            Dirty: "dirty",
            Never: "never"
        },
        /**
         * Constant Enum: Themes for {@link GlobalContext.getCurrentTheme globalContext.getCurrentTheme()}.
         * @remarks getCurrentTheme() does not work with Dynamics CRM for tablets or in the unified interface.
         */
        Theme: {
            Default: "default",
            Office12Blue: "Office12Blue",
            Office14Silver: "Office14Silver"
        },
        /**
         * Constant Enum: Settings for {@link GlobalContext.getAdvancedConfigSetting globalContext.getAdvancedConfigSetting(setting)}
         */
        AdvancedConfigSettingOption: {
            MaxChildIncidentNumber: "MaxChildIncidentNumber",
            MaxIncidentMergeNumber: "MaxIncidentMergeNumber"
        },
        /**
         * Constant Enum: Requirement Level for {@link Attributes.Attribute.getRequiredLevel Attributes.Attribute.getRequiredLevel()} and
         * {@link Attributes.Attribute.setRequiredLevel Attributes.Attribute.setRequiredLevel()}.
         * @see {@link Xrm.Attributes.RequirementLevel}
         */
        AttributeRequirementLevel: {
            None: "none",
            Recommended: "recommended",
            Required: "required"
        },
        /**
         * Constant Enum: Date attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.DateAttribute DateAttribute}.
         * @see {@link Xrm.Attributes.DateAttributeFormat}
         */
        DateAttributeFormat: {
            Date: "date",
            DateTime: "datetime"
        },
        /**
         * Constant Enum: Integer attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.NumberAttribute NumberAttribute}.
         * @see {@link Xrm.Attributes.IntegerAttributeFormat}
         */
        IntegerAttributeFormat: {
            Duration: "duration",
            None: "none"
        },
        /**
         * Constant Enum: OptionSet attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.OptionSetAttribute OptionSetAttribute}.
         * @see {@link Xrm.Attributes.OptionSetAttributeFormat}
         */
        OptionSetAttributeFormat: {
            Language: "language",
            TimeZone: "timezone"
        },
        /**
         * Constant Enum: String attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.StringAttribute StringAttribute}.
         * @see {@link Xrm.Attributes.StringAttributeFormat}
         */
        StringAttributeFormat: {
            Email: "email",
            Phone: "phone",
            Text: "text",
            TextArea: "textarea",
            TickerSymbol: "tickersymbol",
            URL: "url"
        },
        /**
         * Constant Enum: Attribute types for {@link Attributes.Attribute.setDisplayState()}.
         * @see {@link Xrm.Attributes.AttributeType}
         */
        AttributeType: {
            Boolean: "boolean",
            DateTime: "datetime",
            Decimal: "decimal",
            Double: "double",
            Integer: "integer",
            Lookup: "lookup",
            Memo: "memo",
            Money: "money",
            MultiOptionSet: "multioptionset",
            OptionSet: "optionset",
            String: "string"
        },
        /**
         * Constant Enum: Control types for {@link Controls.Control.getControlType Controls.Control.getControlType()}.
         * @see {@link Xrm.Controls.ControlType}
         */
        StandardControlType: {
            Standard: "standard",
            IFrame: "iframe",
            Lookup: "lookup",
            OptionSet: "optionset",
            MultiSelectOptionSet: "multiselectoptionset",
            SubGrid: "subgrid",
            WebResource: "webresource",
            Notes: "notes",
            TimerControl: "timercontrol",
            KBSearch: "kbsearch",
            TimeLineWall: "timelinewall",
            QuickForm: "quickform"
        },
        /**
         * Constant Enum: Direction types for a process stage change event
         * @see {@link ProcessFlow.StageChangeDirection}
         */
        StageChangeDirection: {
            Next: "Next",
            Previous: "Previous"
        },
        /**
         * Constant Enum: Status for {@link ProcessFlow.Stage.getStatus Stage.getStatus()}.
         * @see {@link ProcessFlow.StageStatus}
         */
        StageStatus: {
            Active: "active",
            Inactive: "inactive"
        },
        /**
         * Constant Enum: Status for {@link ProcessFlow.Process.getStatus Process.getStatus()}.
         * @see {@link ProcessFlow.ProcessStatus}
         */
        ProcessStatus: {
            Active: "active",
            Aborted: "aborted",
            Finished: "finished"
        },
        /**
         * Constant Enum: Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
         * @see {@link Xrm.Url.CmdBarDisplay}
         */
        CmdBarDisplay: {
            True: "true",
            False: "false"
        },
        /**
         * Constant Enum: Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
         * @see {@link Xrm.Url.NavBarDisplay}
         */
        NavBarDisplay: {
            Entity: "entity",
            On: "on",
            Off: "off"
        },
        /**
         * Constant Enum: Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
         * @see {@link Xrm.Url.ReportAction}
         */
        ReportAction: {
            Filter: "filter",
            Run: "run"
        },
        /**
         * Constant Enum: Posible file types for Xrm.Device.pickFile options
         * @see {@link Xrm.Device.PickFileTypes}
         */
        DevicePickFileType: {
            Audio: "audio",
            Video: "vidoe",
            Image: "image"
        }
    }
    /**
    * Interface for formContext
    * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/executioncontext/getformcontext External Link: getFormContext (Client API reference)}
    */
    this.formContext = Xrm.FormContext();
    /**
    * Gets the global context.
    * The method provides access to the global context without going through the form context.
    */
    this.GetGlobalContext = function () { return Xrm.GlobalContext() };
    this.Xrm = Xrm.XrmStatic();
}();
