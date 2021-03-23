// constants for api calls;
export const USER = "user";
export const GETLOGINUSER = "GETLOGINUSER";
export const USER_CREATE = "User";
export const GET_USER = "User";
export const PROGRAMS = "programs";
export const CREATE = "Create";
export const AUTHENTICATE = "authenticate";
export const ALL = "all";
export const SDGS = "sdgs";
export const INDICATORS = "indicators";
export const FORM = "form";
export const INDICATOR_QUESTIONS = "selected_indicator_question";
export const REPORTS = "program_report";
export const PROGRAM_FORMS = "program_forms";
export const GET_BUDGET_AND_BENEFICIARIES =
  "total_number_of_beneficiaries_and_budget";
export const appConstant = {
  SERVICEBASEURI:
    process.env.NODE_ENV === "development"
      ? "https://trail-api.test.vggdev.com"
      : window.env.SERVICEBASEURI,
};
