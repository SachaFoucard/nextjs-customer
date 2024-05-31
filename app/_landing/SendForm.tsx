import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(50),
});

const Send = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)" }}
    className="z-10 p-4 rounded-2xl shadow-lg bg-gray-800 border border-gray-700"
    style={{ minWidth: '300px' }}
  >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-white "
        >
          <h1 className="text-center text-lg font-bold">Contact me</h1>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormDescription>At least 3 characters.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="outline"
            type="submit"
            className="w-full p-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Send
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default Send;
