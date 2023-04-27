import { post } from "../utils/index"

export const FileUpload = data => post('/files/uploadOne', data)