import z from "zod";
import { registerschema } from "./register.schema";





export type registerdatatype = z.infer<typeof registerschema>