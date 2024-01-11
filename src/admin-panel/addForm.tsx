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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDataProps } from "@/Types";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store";

const Addform = ({
  setIsAddOpen,
  storedData,
}: Pick<IDataProps, "setIsAddOpen" | "storedData">) => {
  let filtered = [...new Set(storedData.map((product) => product.category))];
  const CategoryEnum = z.enum([
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ]);
  const formSchema = z.object({
    id: z.number(),
    title: z.string().min(5).max(255),
    price: z.number().min(1),
    description: z.string().max(1000),
    image: z.string(),
    category: CategoryEnum,
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
  });
  const { addProducts } = useStore();

  const onSubmit = () => {
    const formData = form.getValues();
    addProducts(formData);
    setIsAddOpen(false);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 3,
      title: "",
      price: 1,
      description: "",
      image: "",
      category: "jewelery",
      rating: {
        rate: 1,
        count: 1,
      },
    },
  });
  return (
    <>
      <div className="bg-transparent top-0 left-0 size-full absolute flex justify-center items-center">
        <div className="flex flex-col gap-8  t-[50%] l-[50%] z-50 m-auto justify-center p-8 w-96 bg-white rounded-2xl shadow-xl">
          <h2 className="text-xl self-center">Add a product</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Title"
                        {...field}
                        required
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Price"
                        {...field}
                        required
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Description"
                        {...field}
                        required
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={() => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Category</SelectLabel>
                            {filtered.map((product, index) => {
                              return (
                                <SelectItem
                                  value={product}
                                  key={index}
                                >
                                  {product}
                                </SelectItem>
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full justify-end flex">
                {" "}
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={onSubmit}
                >
                  Add new product
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div
        className="bg-black/50 top-0 left-0 z-40 absolute size-full flex justify-center items-center"
        onClick={() => setIsAddOpen(false)}
      ></div>
    </>
  );
};

export default Addform;
