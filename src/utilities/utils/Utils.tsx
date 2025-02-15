// ERROR HANDLER
export interface ErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
  message: string;
}

export const getError = (error: ErrorResponse): string => {
  return error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : error.message;
};
