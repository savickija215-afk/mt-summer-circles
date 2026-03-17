interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const TeamCard = ({ name, role, bio, photo }: TeamCardProps) => (
  <div className="card-elevated p-5 flex flex-col items-center text-center">
    <img
      src={photo}
      alt={name}
      className="w-24 h-24 rounded-2xl object-cover mb-4"
      loading="lazy"
    />
    <h4 className="text-base font-bold">{name}</h4>
    <p className="text-xs text-muted-foreground mt-1 mb-2">{role}</p>
    <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
  </div>
);

export default TeamCard;
