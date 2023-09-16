"use client";
import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
});

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const refForm = useRef();
    const form = useForm<z.infer<typeof formSchema>>({
        //@ts-ignore
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        const response = await emailjs.sendForm(
            //@ts-ignore
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            refForm.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        console.log(response);
        setIsSubmitting(false);
    };

    return (
        <div className="md:border md:rounded-lg md:p-4 md:w-[45rem]">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" md:flex md:flex-col md:justify-center md:items-center gap-2 "
                    /* @ts-ignore */
                    ref={refForm}
                >
                    <div className="md:gap-4 md:flex md:flex-row md:justify-center">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="md:flex md:flex-col">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Rohit Nandi"
                                            {...field}
                                            className="md:w-[20rem] md:p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="md:flex md:flex-col">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="rohit@rohit.com"
                                            {...field}
                                            className="md:w-[20rem] md:p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Please write your message here"
                                            {...field}
                                            className="md:w-[41rem]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default Contact;
