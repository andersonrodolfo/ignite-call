import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        crossOrigin={undefined}
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
