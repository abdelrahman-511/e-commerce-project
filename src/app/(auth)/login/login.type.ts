import * as z from "zod"
import { loginschema } from "./login.schema"






export type logindatatype = z.infer <typeof loginschema>